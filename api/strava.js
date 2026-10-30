const https = require('https');

function follow(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Príliš veľa presmerovaní'));
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) {
          loc = new URL(loc, url).href;
        }
        return resolve(follow(loc, maxRedirects - 1));
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve({ finalUrl: url, html }));
    });
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const inputUrl = req.query.url || (req.body && req.body.url);
  if (!inputUrl) {
    return res.status(400).json({ error: 'Chýba URL parameter' });
  }

  try {
    const { finalUrl, html } = await follow(inputUrl.trim());

    // 1. Activity ID
    const idMatch = finalUrl.match(/activities\/(\d+)/) || html.match(/strava\.com\/activities\/(\d+)/);
    const activityId = idMatch ? idMatch[1] : null;

    // 2. Next.js structured data
    let name = null;
    let date = null;
    let athlete = null;
    let mapUrl = null;

    const nextMatch = html.match(/<script id=\"__NEXT_DATA__\"[^>]*>([^<]+)<\/script>/);
    if (nextMatch) {
      try {
        const nextData = JSON.parse(nextMatch[1]);
        const act = nextData.props?.pageProps?.activity;
        if (act) {
          name = act.name || name;
          if (act.startLocal) {
            // "2026-09-23T08:52:58"
            date = act.startLocal.slice(0, 10);
          }
          if (act.athlete) {
            athlete = `${act.athlete.firstName || ''} ${act.athlete.lastName || ''}`.trim();
          }
          if (act.mapImages && act.mapImages.length) {
            mapUrl = act.mapImages[0].url;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to OpenGraph / Meta
    if (!name) {
      const ogTitle = (html.match(/<meta property=\"og:title\" content=\"([^\"]+)\"/) || [])[1];
      if (ogTitle) name = ogTitle.replace(/\s*\|\s*Strava$/, '').trim();
    }
    if (!mapUrl) {
      mapUrl = (html.match(/<meta property=\"og:image\" content=\"([^\"]+)\"/) || [])[1] || null;
    }

    return res.status(200).json({
      success: true,
      activityId,
      name: name || 'Beh',
      date: date || null,
      athlete: athlete || null,
      mapUrl: mapUrl || null,
      stravaUrl: activityId ? `https://www.strava.com/activities/${activityId}` : finalUrl
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Nepodarilo sa načítať aktivitu' });
  }
};
