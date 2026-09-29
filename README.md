# 🏥 Your Health, Our Priority

**A private, offline-first cycle & health tracker — no accounts, no servers, no ads.**

A calm, hospital-style companion for tracking periods, symptoms, mood, pain, lifestyle and more. Every byte of your data stays on your own device. Nothing is ever sent anywhere.

---

## ✨ What's inside

| Area | What it does |
|---|---|
| 🩸 **Period tracking** | Log start/end date, flow, spotting, clots, symptoms and notes. Editable and deletable, with overlap protection. |
| 📅 **Calendar** | Full month view marking logged periods, today, and estimated (dashed) windows. Tap any day — past or present — to add or edit information. |
| 🩹 **Symptoms** | Physical and emotional symptoms with **Mild / Moderate / Severe** intensity, plus your own custom symptoms. |
| 😊 **Mood & pain** | One-tap logging from Home or any calendar day. |
| 📈 **Insights** | Overview, Cycles, Symptoms, Mood and Trends tabs — cycle-length charts, symptom frequency, pain patterns, and lifestyle trends, all computed from *your* real logs. |
| 🌸 **PCOS / Irregular cycle view** | A dedicated, judgment-free screen. Predictions become a **range**, never a false-precision date. |
| 🌱 **Fertility (optional)** | An estimated fertile window, clearly labelled and switchable off. Never claims a day is "safe." |
| 🤰 **Pregnancy mode (optional)** | A separate mode you start yourself — never auto-triggered by a late period. |
| 📓 **Journal** | Private, searchable daily entries with mood. |
| 🌙 **Lifestyle** | Sleep, water, exercise, weight and stress, logged per day (including past days). |
| 💊 **Medication & supplements** | Track what you take — the app never recommends or suggests changing anything. |
| 📚 **Learn** | Short, factual, non-alarming articles on cycles, PCOS and self-care. |
| 🩺 **Doctor summary** | A one-page, printable/exportable summary (cycle stats, symptoms with severity, bleeding days, flagged patterns) to bring to an appointment. |
| ⏰ **Reminders** | Period, logging, medication, hydration or custom reminders. Notifications never reveal health details — only "You have a reminder from your health tracker." |
| 🔒 **App Lock** | A local PIN screen for quick privacy (not encryption — see [Privacy](#-privacy--your-data) below). |
| 💾 **Backup & restore** | Plain or **passphrase-encrypted** JSON backup, restorable on any device running this same app. |
| 🌗 **Light & dark themes** | A warm, glowing brown-on-cream (or charcoal) hospital-premium look — switchable anytime. |
| 📶 **Fully offline** | Installable as an app. Works with **zero internet connection** after the first load. |

Every number you see is computed live from your own logs — nothing is hardcoded, faked, or randomly generated.

---

## 📁 Folder structure

```
cycle-health-tracker/
├── index.html          The single HTML shell (loads CSS + JS below)
├── manifest.json        PWA manifest (app name, icons, colors)
├── sw.js                 Offline service worker (cache-first, self-updating)
├── README.md             You are here
├── css/
│   └── style.css         All styling — themes, layout, components
├── js/
│   ├── app.js            The entire application: state, screens, logic
│   └── pwa.js             Service-worker registration + install prompt
└── icons/
    ├── icon.svg           Source vector icon (hospital cross)
    ├── icon-180.png        Apple touch icon
    ├── icon-192.png        Standard PWA icon
    └── icon-512.png        High-res PWA / splash icon
```

No build tools, no bundlers, no frameworks, no `node_modules`. Open it and it runs.

---

## 🚀 Getting started

### Option A — Just open it
Double-click `index.html`. It works immediately in any modern browser.
> Installing as an app (see below) requires serving it over `http://` or `https://` — browsers block service workers on the plain `file://` protocol.

### Option B — Run it properly (recommended, 10 seconds)
From inside the `cycle-health-tracker` folder, start any static file server:

```bash
# Python (built into most systems)
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

Then open **http://localhost:8080** in your browser.

### Option C — Install it as a real app 📲
1. Open the app over `http://` or `https://` (see Option B, or host it — GitHub Pages, Netlify, Vercel, or your own server all work).
2. **Android / Desktop Chrome/Edge:** tap the "Install" icon in the address bar, or open **More → Settings → About** and tap **Install app**.
3. **iPhone/iPad (Safari):** tap Share → **Add to Home Screen**.
4. Launch it from your home screen. It now opens full-screen, with its own icon, and works **completely offline**.

---

## 📴 How the offline mode works

- `sw.js` is a **service worker** that runs alongside the page. On first load, it downloads and caches the entire app shell (HTML, CSS, JS, icons).
- Every visit after that is served **instantly from the cache**, even with airplane mode on.
- In the background, it quietly checks for a newer version and refreshes the cache — you'll see a small "Update ready" toast when a new version is available. Just reopen the app to use it.
- Your **data** (periods, logs, journal, settings) is never part of the cache — it lives separately in the browser's local storage, per the [Privacy](#-privacy--your-data) section below.
- To ship an update, bump the `VERSION` constant at the top of `sw.js` — this automatically invalidates the old cache and fetches everything fresh.

---

## 🔐 Privacy & your data

This app was built local-first, on purpose:

- **No account.** No sign-up, no login, no email.
- **No server.** There is nothing to send data *to* — the page's Content-Security-Policy actively blocks outgoing network requests.
- **No analytics, no ads, no cookies, no tracking of any kind.**
- **Storage:** your logs live only in this browser's local storage, on this one device. Clearing your browser's site data, or switching browsers/devices, will **not** carry your data over automatically.
- **Moving to a new phone or browser?** Go to **More → Settings → Backup & data management** and:
  - Download a backup (plain or passphrase-**encrypted**, recommended), then
  - Open the app on the new device and **restore** from that file.
- **App Lock (PIN):** this is a lightweight privacy screen to stop casual glances — it is **not** encryption, and it cannot protect data from someone with full access to the device/browser profile. True fingerprint/biometric unlock isn't something a web page can access; the app is honest about this on the lock screen itself.
- **Encrypted backups** use your browser's built-in Web Crypto API (AES-GCM with a PBKDF2-derived key from your passphrase). If you forget the passphrase, **the file cannot be recovered by anyone** — including us. Store it somewhere safe.

---

## 🩺 A note on medical accuracy

This app is a **tracking and educational tool**. It is built to:
- **Never diagnose** anything (not PCOS, not pregnancy, not any condition).
- **Never present an estimate as a confirmed fact.** Predictions are always labelled "Estimated," and irregular/PCOS cycles get a **range**, not a false-precision date.
- **Never claim a day is "safe" or "unsafe"** for fertility.
- Use plain, neutral language throughout: *"you logged…", "based on your history…", "consider discussing this with a healthcare professional."*

That said — **this has not been reviewed by a licensed clinician**, and it should not be treated as medical advice or a substitute for professional care. If anything in your own logs feels unusual or concerning, please talk to a healthcare professional.

---

## 🎨 Design language

- Dark charcoal or warm cream backgrounds, never bright pink or red.
- A single warm brown accent color, used consistently for selection, progress, charts and calls to action.
- A serif display font for headings, clean sans-serif for everything else.
- Soft glowing shadows and gradients for a premium, calm, "modern hospital system" feel — not a playful consumer app.
- Fully responsive from 360px to 430px wide phones, with safe-area support for notches and home indicators.

---

## 🛠️ Customizing

Everything is plain, readable HTML/CSS/JS — no build step required.

- **Colors & theme:** edit the CSS variables at the very top of `css/style.css` (`--bg`, `--ac`, `--tx`, etc.) for both the dark and light themes.
- **App name & icon:** update `manifest.json` and swap the files in `icons/`.
- **Default cycle assumptions, symptom lists, article content:** all defined near the top of `js/app.js` in plain arrays/objects (`SY`, `MOODS`, `ART`, `DEF`) — easy to extend.
- **Offline cache list:** if you add new files, list them in the `ASSETS` array in `sw.js` and bump `VERSION`.

---

## ✅ Quality checklist

- [x] All 18+ screens from the design are implemented and wired to real, persisted data.
- [x] No fake/random data — every number comes from what you actually logged.
- [x] No `alert()`/`confirm()` — custom toasts and bottom-sheet confirmations only.
- [x] Validates input (dates, ranges, overlaps) before saving.
- [x] Works fully offline once installed.
- [x] No external network calls, fonts, or scripts — everything is self-contained.
- [x] Responsive from 360px–430px, safe-area aware, keyboard-friendly.
- [x] Respects `prefers-reduced-motion`.

---

## 💬 A gentle closing note

This app was designed to be honest about uncertainty, gentle about missed days, and completely private by default. We hope it feels like a calm, trustworthy space — not another app demanding your attention.

Take care of yourself. 🤎
