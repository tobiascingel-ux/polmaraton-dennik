const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const token = process.env.VERCEL_TOKEN || '';
const teamId = process.env.VERCEL_TEAM_ID || 'team_CYf7zwuVozzruCsqYyJdqEN7';
const baseDir = path.resolve(__dirname, '..');
const targetAlias = 'polmaraton-dennik.vercel.app';

function getFiles(dir, prefix = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === '.DS_Store' || file === '.git' || file === '.vercel' || file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    const relPath = prefix ? prefix + '/' + file : file;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, relPath));
    } else {
      const content = fs.readFileSync(fullPath);
      const sha = crypto.createHash('sha1').update(content).digest('hex');
      results.push({
        file: relPath,
        size: stat.size,
        mode: stat.mode,
        sha,
        buffer: content
      });
    }
  }
  return results;
}

const { execSync } = require('child_process');

try {
  const renderScript = path.join(__dirname, 'render_icons.m');
  if (fs.existsSync(renderScript)) {
    const bin = path.join(__dirname, 'render_icons');
    execSync(`clang -framework Foundation -framework AppKit "${renderScript}" -o "${bin}" && "${bin}" && rm -f "${bin}"`, { stdio: 'inherit' });
  }
} catch (e) {
  console.error('Icon generation warning:', e);
}

const files = getFiles(baseDir);

function uploadFile(f) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.vercel.com',
      path: '/v2/files?teamId=' + teamId,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/octet-stream',
        'Content-Length': f.size,
        'x-vercel-digest': f.sha,
        'User-Agent': 'Node'
      }
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ file: f.file, sha: f.sha, size: f.size, mode: f.mode });
        } else {
          console.error('Upload failed:', f.file, res.statusCode, data);
          reject(new Error(data));
        }
      });
    });
    req.on('error', reject);
    req.write(f.buffer);
    req.end();
  });
}

function requestJson(opt, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(opt, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, data: JSON.parse(d) });
        } catch(e) {
          resolve({ statusCode: res.statusCode, data: d });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  console.log(`Uploading ${files.length} files to Vercel from ${baseDir}...`);
  const uploadedFiles = [];
  for (const f of files) {
    await uploadFile(f);
    uploadedFiles.push({
      file: f.file,
      sha: f.sha,
      size: f.size,
      mode: f.mode
    });
  }

  console.log('Creating production deployment...');
  const deployPayload = JSON.stringify({
    name: 'polmaraton',
    project: 'prj_aWv28Yot54U4G6LO1G1lmBAi58cD',
    target: 'production',
    files: uploadedFiles
  });

  const depRes = await requestJson({
    hostname: 'api.vercel.com',
    path: '/v13/deployments?teamId=' + teamId,
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(deployPayload),
      'User-Agent': 'Node'
    }
  }, deployPayload);

  console.log('DEPLOY STATUS:', depRes.statusCode);
  const depId = depRes.data.id;
  console.log('DEPLOY ID:', depId);
  console.log('DEPLOY URL:', depRes.data.url);

  for (let i = 0; i < 30; i++) {
    await sleep(2000);
    const checkRes = await requestJson({
      hostname: 'api.vercel.com',
      path: `/v13/deployments/${depId}?teamId=` + teamId,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'User-Agent': 'Node'
      }
    });
    const state = checkRes.data.readyState;
    console.log(`Poll ${i+1}: readyState = ${state}`);
    if (state === 'READY') break;
    if (state === 'ERROR' || state === 'CANCELED') throw new Error(`Deployment failed: ${state}`);
  }

  console.log(`Aliasing ${depId} to ${targetAlias}...`);
  const aliasPayload = JSON.stringify({ alias: targetAlias });
  const aliasRes = await requestJson({
    hostname: 'api.vercel.com',
    path: `/v2/deployments/${depId}/aliases?teamId=` + teamId,
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(aliasPayload),
      'User-Agent': 'Node'
    }
  }, aliasPayload);

  console.log('ALIAS STATUS:', aliasRes.statusCode, JSON.stringify(aliasRes.data));
  console.log('DEPLOYMENT COMPLETE!');
}

run().catch(console.error);
