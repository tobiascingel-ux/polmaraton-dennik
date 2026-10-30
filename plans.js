/* ==========================================================================
   TRÉNINGOVÉ DÁTA – tento súbor aktualizuje tréner každý týždeň.
   Tvoje záznamy (splnené tréningy, časy, screenshoty) sú uložené v prehliadači,
   takže úprava tohto súboru ich NEPREPÍŠE.
   ========================================================================== */
window.TRAINING = {
  athlete: { name: "Tobiáš Cingeľ" },

  goal: {
    title: "Polmaratón pod 1:30:00",
    distanceKm: 21.0975,
    targetSec: 5400,              // 1:30:00 => 4:16 /km
    raceDate: "2027-10-03",
    startPredSec: 7729            // východiskový stav: 2:08:49 (Riegelov vzorec na základe doterajších behov)
  },

  /* Aktuálny odhad polmaratónu – kalkulovaný cez Riegelov vzorec zo všetkých doterajších behov */
  estimates: [
    { date: "2026-10-08", sec: 7729, note: "Východiskový odhad podľa Riegelovho vzorca: T2 = T1 * (21.0975 / D1)^1.06 => 2:08:49" },
    { date: "2026-10-25", sec: 7779, note: "Aktualizovaný odhad po 2. týždni (23 behov, 134,7 km). Priemerné tempo Z2 stabilizované na 6:14 /km." }
  ],

  /* Bežecká obuv a výbava */
  gear: {
    shoes: [
      {
        id: "hoka-rincon-4",
        name: "HOKA Rincon 4",
        initialKm: 111.95,         // doterajší reálny nájazd zo všetkých 19 evidovaných behov (111,95 km)
        maxRecommendedKm: 600,     // odporúčaná životnosť ľahkej EVA peny
        dropMm: 5,
        weightG: 220,
        type: "Univerzálna tempovo-objemová teniska",
        status: "Aktívna tréningová obuv",
        notes: ""
      }
    ]
  },

  /* Odporúčané tréningové tempá podľa aktuálnej formy (bez merania pulzu) */
  paces: [
    { zone: "Z1 – Regenerácia", pace: "6:40+ /km", feel: "Veľmi ľahké tempo, plynulá reč bez zadýchania" },
    { zone: "Z2 – Ľahký a dlhý beh", pace: "6:00 – 6:40 /km", feel: "Plynulá konverzácia celými vetami. Základ vytrvalosti." },
    { zone: "Z3 – Tempový prah", pace: "4:58 – 5:10 /km", feel: "Kontrolovaný a udržateľný diskomfort, len krátke odpovede" },
    { zone: "Z4 – Intervaly", pace: "4:35 – 4:45 /km (400 m = 1:50 – 1:54)", feel: "Vysoká intenzita, schopnosť prehovoriť len jednotlivé slová" },
    { zone: "Z5 – Rýchlosť a rovinky", pace: "4:10 – 4:25 /km (200 m = 50 – 53 s)", feel: "Rýchly uvoľnený beh s dôrazom na techniku odrazu" },
    { zone: "Cieľové tempo HM", pace: "4:16 /km", feel: "Cieľ o 12 mesiacov (1:30:00)" }
  ],

  /* Míľniky na ceste k 1:30 */
  milestones: [
    { when: "December 2026", text: "5 km test na dráhe pod 22:30" },
    { when: "Marec 2027", text: "10 km pod 46:00 a pridanie 4. tréningu do týždňa" },
    { when: "Máj 2027", text: "5 km pretek pod 21:00" },
    { when: "Júl 2027", text: "10 km pretek pod 42:30" },
    { when: "August 2027", text: "Kontrolný dlhý beh 16 – 18 km v tempe 4:35 /km" },
    { when: "September 2027", text: "5 km pod 19:50 a 10 km pod 41:00" },
    { when: "3. október 2027", text: "Polmaratón pod 1:30:00 (Cieľový pretek)" }
  ],

  /* Rekordy zo Stravy (pred začiatkom spolupráce) */
  prs: [
    { dist: "400 m", time: "1:46", date: "2026-08-12" },
    { dist: "1 km", time: "4:19", date: "2026-08-17" },
    { dist: "5 km", time: "23:17", date: "2026-08-17" },
    { dist: "10 km", time: "48:33", date: "2026-08-17" }
  ],

  /* Kompletná história všetkých 19 doterajších behov zo Stravy */
  history: [
    { date: "2026-07-14", name: "1/12", km: 5.05, time: "28:55" },
    { date: "2026-07-16", name: "2/12", km: 5.01, time: "28:08" },
    { date: "2026-07-19", name: "3/12", km: 6.01, time: "36:00" },
    { date: "2026-07-21", name: "4/12", km: 7.13, time: "40:45" },
    { date: "2026-07-30", name: "5/12", km: 6.10, time: "36:24" },
    { date: "2026-08-01", name: "6/12 8km", km: 6.11, time: "37:22" },
    { date: "2026-08-02", name: "7/12", km: 5.27, time: "28:24" },
    { date: "2026-08-04", name: "8/12", km: 8.29, time: "45:05" },
    { date: "2026-08-05", name: "9/12", km: 7.31, time: "39:02" },
    { date: "2026-08-10", name: "10/12", km: 7.51, time: "41:35" },
    { date: "2026-08-12", name: "11/12", km: 6.30, time: "35:52" },
    { date: "2026-08-17", name: "12/12", km: 5.02, time: "23:25" },
    { date: "2026-08-18", name: "Lunch Run", km: 5.01, time: "27:04" },
    { date: "2026-08-21", name: "Ranný táborový beh s Ďurim", km: 5.51, time: "34:37" },
    { date: "2026-08-29", name: "Evening Run", km: 5.01, time: "26:14" },
    { date: "2026-09-01", name: "Morning Run", km: 5.02, time: "27:00" },
    { date: "2026-09-05", name: "Praha s Timom", km: 5.62, time: "32:59" },
    { date: "2026-09-08", name: "Evening Run", km: 5.67, time: "31:38" },
    { date: "2026-09-23", name: "Morning Run", km: 5.00, time: "27:23" }
  ],

  /* Predvolené záznamy splnených tréningov */
  initialLogs: {
    "w1-ut": {
      done: true,
      km: "4.14",
      time: "25:14",
      date: "2026-10-13",
      notes: "Večerný beh v Prahe (4,14 km, 25:14, tempo 6:05 /km, prevýšenie +52 m). Namiesto 6 km zabehnuté 4,14 km.",
      shots: ["/shots/strava-2026-10-13.png"]
    },
    "w1-stv": {
      done: true,
      km: "5.00",
      time: "30:34",
      date: "2026-10-15",
      notes: "Ranný beh v Prahe (5,00 km, 30:34, tempo 6:06 /km, prevýšenie +44 m). Zvolený súvislý ľahký beh v Z2 namiesto úsekov na dráhe.",
      shots: ["/shots/strava-2026-10-15.png"]
    },
    "w2-po": {
      done: true,
      date: "2026-10-19"
    },
    "w2-ut": {
      done: true,
      date: "2026-10-20"
    },
    "w2-st": {
      done: true,
      date: "2026-10-21"
    },
    "w2-stv": {
      done: true,
      km: "5.51",
      time: "32:29",
      date: "2026-10-22",
      rpe: "6/10",
      notes: "Celkové dáta: 5.51 km za 32:29 (tempo 5:53 /km)\nTréning v aeróbno-tempovom pásme Z2/Z3. Veľmi plynulý beh s dobrou ekonomikou pohybu a udržateľnou aeróbnou záťažou.\nPriebeh tempa: Priemerné tempo 5:53 /km bolo rovnomerne udržané po celej dĺžke 5.51 km.\nOdporúčanie trénera: Telo reaguje na aeróbnu adaptáciu výborne. V nasledujúcom tréningu pokračovať presne podľa stanoveného plánu.",
      shots: ["shot-mvjr2o5p68w26", "shot-mvjr2rjo6jo3w"]
    },
    "w2-pi": {
      done: true,
      date: "2026-10-23",
      notes: "Nebolo to najjednoduchšie, ťažšie ako som čakal. Cítil som stehná."
    },
    "w2-so": {
      done: true,
      date: "2026-10-24"
    },
    "w2-ne": {
      done: true,
      km: "8.08",
      time: "50:26",
      date: "2026-10-25",
      rpe: "7/10",
      notes: "Celkové dáta: 8.08 km za 50:26 (tempo 6:14 /km)\nTréning v regeneračnom a aeróbnom pásme Z2 (ľahký vytrvalostný beh). Výborne zvládnutá kontrola intenzity – beh v tomto tempe buduje hustotu kapilár, šetrí svalový glykogén a tvorí kľúčový základ pre polmaratón.\nPriebeh tempa (medzičasy: 1. km: 6:31 • 2. km: 7:06 • 3. km: 6:23 • 4. km: 6:12 • 5. km: 5:58 • 6. km: 6:09 • 7. km: 5:56 • 8. km: 5:33): Negatívny split – druhá polovica behu bola v priemere o 39 s/km rýchlejšia ako prvá. Výborná taktická disciplína a ekonomika síl v závere.\nOdporúčanie trénera: Vyšší objem – zamerať sa na hydratáciu, doplnenie sacharidov a 10 min statického strečingu lýtok a hamstringov.",
      shots: ["shot-mvnjsmw7kqjv7", "shot-mvnjso3b3d0pd"]
    },
    "w3-po": {
      done: true,
      km: "",
      time: "",
      date: "2026-10-26",
      rpe: "",
      notes: "Veľmi príjemné, pružné a svieže.",
      shots: []
    },
    "w3-ut": {
      done: true,
      km: "6.89",
      time: "42:22",
      date: "2026-10-28",
      rpe: "",
      notes: "Celkové dáta: 6.89 km za 42:22 (tempo 6:09 /km)\nTréning v regeneračnom a aeróbnom pásme Z2 (ľahký vytrvalostný beh). Výborne zvládnutá kontrola intenzity – beh v tomto tempe buduje hustotu kapilár, šetrí svalový glykogén a tvorí kľúčový základ pre polmaratón.\nPriebeh tempa (medzičasy: 1. km: 6:13 • 2. km: 6:00 • 3. km: 5:53 • 4. km: 6:35 • 5. km: 6:20 • 6. km: 6:15): Pozitívny split – úvod bol svižnejší a v druhej polovici prišlo k miernemu spomaleniu o 21 s/km. Do budúcna odporúčam začať úvodný kilometer o 10–15 s pomalšie a postupne tempo gradovať.\nOdporúčanie trénera: Telo reaguje na aeróbnu adaptáciu výborne. V nasledujúcom tréningu pokračovať presne podľa stanoveného plánu.",
      shots: ["shot-mvsdcaio1fsjq", "shot-mvsdcbsdmue4t"]
    },
    "w3-st": {
      done: true,
      km: "",
      time: "",
      date: "2026-10-28",
      rpe: "",
      notes: "",
      shots: []
    },
    "w3-pi": {
      done: true,
      km: "",
      time: "",
      date: "",
      rpe: "",
      notes: "",
      shots: []
    }
  },

  /* ======================= TÝŽDENNÉ PLÁNY ======================= */
  weeks: [
    {
      id: "2026-W42",
      number: 1,
      start: "2026-10-12",
      end: "2026-10-18",
      phase: "Fáza 01 — Návrat po chorobe a aeróbna báza",
      focus: "Úvodný týždeň po chorobe: odbehnuté 2 ľahké aeróbne behy (4,14 km a 5,00 km) v Z2.",
      targetKm: 20.5,
      workouts: [
        {
          id: "w1-po", day: "Pondelok", date: "2026-10-12", type: "strength",
          title: "Posilňovanie doma A + mobilita",
          duration: "25 – 30 min",
          main: ["Posilňovanie A: 3 kolá (viď Knižnica)", "Na záver 5 min mobilita bokov a členkov"],
          notes: "Kvalita pohybu je dôležitejšia ako počet opakovaní.",
          refs: ["strength-a", "mobility"]
        },
        {
          id: "w1-ut", day: "Utorok", date: "2026-10-13", type: "easy",
          title: "Ľahký beh 6 km + 4 rovinky",
          distanceKm: 6, duration: "~38 min", pace: "6:00 – 6:40 /km (Z2)",
          warmup: ["3 min rýchla chôdza", "Dynamická rozcvička (8 min)"],
          main: ["6 km ľahko, konverzačné tempo 6:00 – 6:40 /km. Prvý km pokojne aj pomalšie.",
                 "Po dobehnutí 4× 20 s rovinky (stupňovaný beh do ~4:20 /km, uvoľnene), medzi nimi 60 – 90 s chôdza."],
          cooldown: ["3 – 5 min chôdza", "Strečing po behu (8 – 10 min)"],
          notes: "Toto je test disciplíny: ak bude priemerné tempo rýchlejšie ako 6:00, je to príliš rýchlo.",
          refs: ["warmup-dynamic", "strides", "stretch-post"]
        },
        {
          id: "w1-st", day: "Streda", date: "2026-10-14", type: "rest",
          title: "Voľno",
          main: ["Úplné voľno alebo 20 – 30 min prechádzka."],
          refs: []
        },
        {
          id: "w1-stv", day: "Štvrtok", date: "2026-10-15", type: "interval",
          title: "Dráha: 6 × 400 m",
          distanceKm: 6.5, duration: "~45 min", pace: "400 m za 1:50 – 1:54 (4:35 – 4:45 /km)",
          warmup: ["2 km rozklus 6:15 – 6:40 /km", "Dynamická rozcvička + atletická abeceda (10 min)", "3× 80 m stupňovaný beh"],
          main: ["6 × 400 m za 1:50 – 1:54 (rovnomerne, 1. úsek nie rýchlejšie ako 1:52)",
                 "Pauza: 200 m pomalý výklus/chôdza (≈ 1:30 – 2:00)",
                 "Cieľ: všetky úseky v rovnakom čase. Posledný môže byť najrýchlejší."],
          cooldown: ["1,5 km výklus", "Strečing po behu (10 min)"],
          notes: "Na dráhe bež v 1. dráhe a zapisuj si časy každej 400-ky (do poznámky). Ak by si mal po chorobe ťažké nohy, sprav len 5 úsekov.",
          refs: ["warmup-dynamic", "drills", "stretch-post"]
        },
        {
          id: "w1-pi", day: "Piatok", date: "2026-10-16", type: "strength",
          title: "Posilňovanie doma B",
          duration: "25 min",
          main: ["Posilňovanie B: 3 kolá (viď Knižnica)"],
          refs: ["strength-b"]
        },
        {
          id: "w1-so", day: "Sobota", date: "2026-10-17", type: "rest",
          title: "Voľno",
          main: ["Voľno. Môžeš si dať prechádzku, bicykel alebo foam roller (10 min)."],
          refs: ["mobility"]
        },
        {
          id: "w1-ne", day: "Nedeľa", date: "2026-10-18", type: "long",
          title: "Dlhý beh 8 km",
          distanceKm: 8, duration: "~50 min", pace: "6:10 – 6:40 /km (Z2)",
          warmup: ["3 min chôdza", "Dynamická rozcvička (8 min)"],
          main: ["8 km rovnomerne, ľahko a konverzačne.", "Vezmi si so sebou vodu, ak je teplo."],
          cooldown: ["5 min chôdza", "Strečing po behu (10 min) + foam roller, ak máš"],
          notes: "Dlhý beh nie je o tempe, ale o čase na nohách. Do konca roka ho postupne predĺžime na 12 – 14 km.",
          refs: ["warmup-dynamic", "stretch-post", "mobility"]
        }
      ]
    },
    {
      id: "2026-W43",
      number: 2,
      start: "2026-10-19",
      end: "2026-10-25",
      phase: "Fáza 01 — Reštart a aeróbna stabilizácia",
      focus: "Prenastavený tréning od štvrtka 22. októbra: Postupný rozbeh po pauze s dôrazom na čisté Z2 tempo a rovnomerný krok.",
      targetKm: 13.5,
      workouts: [
        {
          id: "w2-po", day: "Pondelok", date: "2026-10-19", type: "rest",
          title: "Voľno",
          main: ["Oddych pred reštartom tréningového bloku."],
          refs: []
        },
        {
          id: "w2-ut", day: "Utorok", date: "2026-10-20", type: "rest",
          title: "Voľno",
          main: ["Oddych / regenerácia."],
          refs: []
        },
        {
          id: "w2-st", day: "Streda", date: "2026-10-21", type: "rest",
          title: "Voľno & príprava",
          main: ["Mentálna a fyzická príprava na zajtrajší reštart. Dostatok spánku a hydratácia."],
          refs: []
        },
        {
          id: "w2-stv", day: "Štvrtok", date: "2026-10-22", type: "easy",
          title: "Reštart: Ľahký beh 5,5 km + 4 rovinky",
          distanceKm: 5.5, duration: "~35 min", pace: "6:10 – 6:40 /km (Z2)",
          warmup: ["3 min rýchla chôdza", "Dynamická rozcvička (8 min)"],
          main: [
            "5,5 km súvisle v konverzačnom tempe 6:10 – 6:40 /km. Drž sa striktne v Z2, nezačínaj rýchlo.",
            "Po dobehnutí 4× 20 s rovinky (stupňovaný beh do ~4:25 /km s dôrazom na uvoľnené ramená a dynamický odraz), pauza 60 – 90 s chôdza."
          ],
          cooldown: ["3 – 5 min chôdza", "Strečing po behu (8 – 10 min)"],
          notes: "Prvý tréning po pauze. Cieľom nie je rýchlosť, ale prebudiť nohy a udržať nízku srdcovú frekvenciu.",
          refs: ["warmup-dynamic", "strides", "stretch-post"]
        },
        {
          id: "w2-pi", day: "Piatok", date: "2026-10-23", type: "strength",
          title: "Posilňovanie doma A + mobilita",
          duration: "25 – 30 min",
          main: [
            "Posilňovanie A: 3 kolá (drepy, bulharské drepy, mostíky, výpony, planky)",
            "Na záver 5 – 8 min mobilita bedier a členkov"
          ],
          notes: "Dôraz na core a stabilitu panvy po včerajšom behu.",
          refs: ["strength-a", "mobility"]
        },
        {
          id: "w2-so", day: "Sobota", date: "2026-10-24", type: "rest",
          title: "Voľno",
          main: ["Úplné voľno, prechádzka na čerstvom vzduchu alebo foam roller (10 min)."],
          refs: ["mobility"]
        },
        {
          id: "w2-ne", day: "Nedeľa", date: "2026-10-25", type: "long",
          title: "Dlhý beh 8 km (Z2)",
          distanceKm: 8, duration: "~52 min", pace: "6:15 – 6:45 /km (Z2)",
          warmup: ["3 min chôdza", "Dynamická rozcvička (8 min)"],
          main: [
            "8 km rovnomerným a pohodlným tempom 6:15 – 6:45 /km.",
            "Kontroluj dych – musíš vedieť plynulo rozprávať celými vetami bez lapania po dychu."
          ],
          cooldown: ["5 min chôdza", "Strečing po behu (10 min)"],
          notes: "Vytrvalostný základ týždňa. Ak sa budeš cítiť unavený, pokojne spomaľ na 6:45 /km.",
          refs: ["warmup-dynamic", "stretch-post"]
        }
      ]
    },
    {
      id: "2026-W44",
      number: 3,
      start: "2026-10-26",
      end: "2026-11-01",
      phase: "Fáza 01 — Budovanie objemu a prvá kvalita",
      focus: "Prvý kontrolovaný intervalový tréning na dráhe v kombinácii s aeróbnym objemom a regeneráciou svalov.",
      targetKm: 21.5,
      workouts: [
        {
          id: "w3-po", day: "Pondelok", date: "2026-10-26", type: "strength",
          title: "Posilňovanie doma B + mobilita",
          duration: "25 – 30 min",
          main: [
            "Posilňovanie B: 3 kolá (viď Knižnica cvikov)",
            "Po nedeľných 8 km zvoľ strednú intenzitu a precíznu techniku.",
            "Na záver 5 – 8 min mobilita bedier, členkov a jemné povalcovanie nôh."
          ],
          notes: "Neprepáľ záťaž – cieľom je aktivácia stabilizátorov panvy a uvoľnenie nôh pred zajtrajším behom.",
          refs: ["strength-b", "mobility"]
        },
        {
          id: "w3-ut", day: "Utorok", date: "2026-10-27", type: "easy",
          title: "Ľahký beh 6 km + 4 rovinky",
          distanceKm: 6, duration: "~38 min", pace: "6:05 – 6:35 /km (Z2)",
          warmup: ["3 min rýchla chôdza", "Dynamická rozcvička (8 min)"],
          main: [
            "6 km súvisle v konverzačnom tempe 6:05 – 6:35 /km (čistá Z2).",
            "Po dobehnutí 4× 20 s rovinky (stupňovaný beh do ~4:20 /km, uvoľnené ramená, vysoké ťažisko), pauza 60 – 90 s chôdza."
          ],
          cooldown: ["3 – 5 min chôdza", "Statický strečing po behu (8 – 10 min)"],
          notes: "Disciplína tempa: nezačínaj rýchlo pod 6:00. Udrž nohy čerstvé pred štvrtkovou dráhou.",
          refs: ["warmup-dynamic", "strides", "stretch-post"]
        },
        {
          id: "w3-st", day: "Streda", date: "2026-10-28", type: "rest",
          title: "Voľno & predzápasová príprava",
          main: ["Úplné voľno pred štvrtkovou dráhou. Dopraj si kvalitný spánok a dobrú hydratáciu."],
          refs: []
        },
        {
          id: "w3-stv", day: "Štvrtok", date: "2026-10-29", type: "interval",
          title: "Dráha: 6 × 400 m (Z4)",
          distanceKm: 6.5, duration: "~45 min", pace: "400 m za 1:50 – 1:54 (4:35 – 4:45 /km)",
          warmup: [
            "2 km rozklus 6:15 – 6:40 /km",
            "Dynamická rozcvička + atletická abeceda (10 min)",
            "3× 80 m stupňovaný beh s pauzou na úplné vydýchanie"
          ],
          main: [
            "6 × 400 m za 1:50 – 1:54 (tempo 4:35 – 4:45 /km, Z4).",
            "Pauza medzi úsekmi: 200 m veľmi pomalý medziklus / chôdza (≈ 1:45 – 2:00 do úplného ukľudnenia dychu).",
            "Taktika: Prvý úsek neprepáliť (ideálne 1:52 – 1:54). Cieľom je rovnomernosť všetkých 6 úsekov. Posledný úsek môžeš vystupňovať."
          ],
          cooldown: ["1,5 km veľmi ľahký výklus", "Statický strečing po behu (10 min)"],
          notes: "Prvá kvalita po reštarte! Bež v 1. dráhe atletického oválu. Zapíš si časy každej 400-ky do poznámky.",
          refs: ["warmup-dynamic", "drills", "stretch-post"]
        },
        {
          id: "w3-pi", day: "Piatok", date: "2026-10-30", type: "strength",
          title: "Posilňovanie doma A + mobilita",
          duration: "25 – 30 min",
          main: [
            "Posilňovanie A: 3 kolá (drepy, bulharské drepy, mostíky, výpony, planky)",
            "Mobilita bedier, flexorov a členkov (8 min) + foam roller na stehná a lýtka"
          ],
          notes: "Posilnenie core a stabilizátorov po dráhe. Ak budú stehná po štvrtku tuhé, sprav 2 kolá s dôrazom na čisté prevedenie.",
          refs: ["strength-a", "mobility"]
        },
        {
          id: "w3-so", day: "Sobota", date: "2026-10-31", type: "rest",
          title: "Voľno",
          main: ["Úplné voľno, ľahká prechádzka na čerstvom vzduchu alebo 10 min foam roller."],
          refs: ["mobility"]
        },
        {
          id: "w3-ne", day: "Nedeľa", date: "2026-11-01", type: "long",
          title: "Dlhý beh 9 km (Z2)",
          distanceKm: 9, duration: "~58 min", pace: "6:15 – 6:45 /km (Z2)",
          warmup: ["3 min chôdza", "Dynamická rozcvička (8 min)"],
          main: [
            "9 km rovnomerným a pohodlným vytrvalostným tempom 6:15 – 6:45 /km v Z2.",
            "Prvé 3 km začni zvoľna (6:35 – 6:45 /km), v druhej polovici drž stabilný aeróbny rytmus.",
            "Kontroluj dych – musíš vedieť plynulo rozprávať bez lapania po dychu."
          ],
          cooldown: ["5 min chôdza", "Dôkladný statický strečing po behu (10 min)"],
          notes: "Navyšujeme vytrvalostný objem z 8 na 9 km. Zober si so sebou vodu, ak je teplejšie. Sústreď sa na uvoľnený krok.",
          refs: ["warmup-dynamic", "stretch-post"]
        }
      ]
    }
  ],

  /* ======================= KNIŽNICA CVIKOV ======================= */
  library: {
    "warmup-dynamic": {
      title: "Dynamická rozcvička pred behom", duration: "8 – 10 min",
      items: [
        ["Ľahký klus alebo rýchla chôdza", "3 – 5 min", "Rozprúdiť krv"],
        ["Kruženie členkov, kolien, bokov", "10× každým smerom", ""],
        ["Švihy nohou predozadu", "10× / noha", "Drž sa stromu/zábradlia"],
        ["Švihy nohou do strán", "10× / noha", ""],
        ["Výpady v chôdzi s rotáciou trupu", "6× / noha", "Otoč sa k prednej nohe"],
        ["„World's greatest stretch“", "4× / strana", "Výpad, lakeť k členku, rotácia ruky hore"],
        ["Liftink (skipping A)", "2× 20 m", "Krátky rýchly krok, kolená hore"],
        ["Zakopávanie", "2× 20 m", "Päty k zadku"],
        ["Rovinky", "2× 60 – 80 m", "Stupňovať do svižného tempa"]
      ]
    },
    "drills": {
      title: "Atletická abeceda (pred kvalitným tréningom)", duration: "8 min",
      items: [
        ["Skipping A (liftink)", "2× 20 – 30 m", "Vzpriamený trup, aktívne ruky"],
        ["Skipping B (predkopávanie)", "2× 20 – 30 m", "Koleno hore, potom vystreť a „zahrab“ pod seba"],
        ["Zakopávanie", "2× 20 – 30 m", ""],
        ["Cválanie bokom", "2× 20 m / strana", ""],
        ["Krížny krok (karaoke)", "2× 20 m", "Rotácia bokov"],
        ["Odpichy (bounding)", "2× 30 m", "Dlhý krok, výskok z chodidla"],
        ["Stupňovaný beh", "3× 80 m", "Posledných 20 m takmer na plno, ale uvoľnene"]
      ]
    },
    "strides": {
      title: "Rovinky (strides)", duration: "4 – 6× 20 s",
      items: [
        ["Postupne zrýchľuj", "20 s", "Do ~90 % maxima, uvoľnené ramená a tvár"],
        ["Chôdza alebo státie", "60 – 90 s", "Úplne vydýchať"],
        ["Prečo?", "", "Technika, ekonomika behu a rýchlosť bez únavy. Nie je to intervalový tréning!"]
      ]
    },
    "stretch-post": {
      title: "Strečing po behu (statický)", duration: "8 – 10 min",
      items: [
        ["Lýtko – rovné koleno (o stenu)", "2× 30 s / noha", ""],
        ["Lýtko – pokrčené koleno (soleus)", "30 s / noha", "Chráni Achillovku"],
        ["Zadné stehno (noha na lavičke, predklon s rovným chrbtom)", "45 s / noha", ""],
        ["Predné stehno (päta k zadku)", "45 s / noha", "Kolená pri sebe"],
        ["Flexor bedra (výpad v kľaku, panva dopredu)", "45 s / strana", "Dôležité pri sedení za stolom"],
        ["Sedací sval – „štvorka“ (ľah, členok na koleno)", "45 s / strana", ""],
        ["Motýlik (vnútorné stehná)", "45 s", ""],
        ["Pozícia dieťaťa (chrbát)", "45 s", "Pokojné dýchanie"]
      ]
    },
    "strength-a": {
      title: "Posilňovanie doma A (sila nôh + core)", duration: "25 min, 3 kolá, 60 s pauza medzi kolami",
      items: [
        ["Drepy", "15×", "Váha na pätách, kolená v smere špičiek"],
        ["Bulharský drep (zadná noha na stoličke)", "10× / noha", "Najdôležitejší cvik pre bežca"],
        ["Mostík na jednej nohe", "12× / noha", "Zatni sedací sval hore 1 s"],
        ["Výpony na schode (pomaly dole 3 s)", "15×", "Prevencia Achillovky a holení"],
        ["Plank (predkoľanie na predlaktiach)", "40 s", "Rovná línia, nezvesiť bedrá"],
        ["Bočný plank", "30 s / strana", ""],
        ["Dead bug", "10× / strana", "Bedrová chrbtica pritlačená k zemi"]
      ]
    },
    "strength-b": {
      title: "Posilňovanie doma B (stabilita + výbušnosť)", duration: "25 min, 3 kolá, 60 s pauza medzi kolami",
      items: [
        ["Výpady dozadu", "10× / noha", ""],
        ["Rumunský mŕtvy ťah na 1 nohe (batoh/fľaše)", "10× / noha", "Rovný chrbát, panva vodorovne"],
        ["Výstupy na stoličku", "10× / noha", "Odraz len z hornej nohy"],
        ["Výpony na jednej nohe", "12× / noha", ""],
        ["Lastúra (clamshell) v ľahu na boku", "15× / strana", "Stredný sedací sval, stabilita kolena"],
        ["Superman (ľah na bruchu)", "12×", "Drž 2 s hore"],
        ["Horolezec", "30 s", ""],
        ["Skoky na mieste / švihadlo", "30 s", "Ľahko na špičkách, pružne"]
      ]
    },
    "mobility": {
      title: "Mobilita & foam roller (voliteľné)", duration: "10 min",
      items: [
        ["Foam roller – lýtka", "60 s / noha", ""],
        ["Foam roller – predné a bočné stehno", "60 s / noha", "Pomaly, bolestivé body podrž"],
        ["Foam roller – sedací sval", "60 s / strana", ""],
        ["90/90 rotácie bokov (sed)", "8× / strana", ""],
        ["Členok – koleno k stene", "10× / noha", "Päta ostáva na zemi"],
        ["Mačka – krava", "10×", ""]
      ]
    }
  }
};
