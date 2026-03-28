# Day Progress Browser Extesion
## Today’s Progress ⏳

A minimal Chrome extension that shows how much of your day has passed — in real time.

## ✨ Features

* Live daily progress bar
* Clean and minimal UI
* Dark & light mode toggle
* Lightweight and fast
* Runs fully locally (no data collection)

## 📸 Preview

![Preview](assets/promo.png) 
![Preview](assets/screenshots.png)
![Preview](assets/toolbar_promo.png)

## 🚀 How it works

The extension calculates how much of the current day has passed using your system time and displays it as a visual progress bar.

## 🔒 Privacy

This extension does **not collect or store any personal data**.

All calculations are done locally in your browser.

👉 [Privacy Policy](./privacy-policy.md)
https://gist.githubusercontent.com/Ayseorkan/12908a622d05d1a4914532b438da3e1b/raw/37654af285f347484fa16e3c17d67e9f48aea879/privacy-policy.txt

## 📦 Installation (Manual)

1. Clone this repo
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

## 🛠 Tech

* Vanilla JavaScript
* Chrome Extension (Manifest v3)
* HTML / CSS

## 💡 Why?

To help you stay aware of your time and improve daily focus — especially useful for people with ADHD or focus challenges.

---

Made with simplicity in mind.

<p align="center">
  <img src="assets/promo.png" alt="Today's Progress Banner" width="100%">
</p>

<h1 align="center">Today’s Progress</h1>

<p align="center">
  A minimal Chrome extension that shows how much of your day has passed in real time.
</p>

<p align="center">
  Clean. Lightweight. Focused.
</p>

---

## Overview

**Today’s Progress** is a minimalist Chrome extension designed to help you stay aware of your time with a simple visual indicator.

It shows how much of the current day has passed through a live progress bar, updated in real time. The extension is built to be lightweight, distraction-free, and easy to use.

---

## Preview

<p align="center">
  <img src="assets/screenshots.png" alt="Today's Progress Screenshot" width="800">
</p>

---

## Features

* Live daily progress bar
* Real-time percentage display
* Current time shown inside the bar
* Dark and light mode toggle
* Minimal and distraction-free interface
* Lightweight and fast
* Works fully locally on your device

---

## Why I made this

Time can easily slip away when you are busy, distracted, or switching between tasks.

**Today’s Progress** gives you a simple way to see your day moving forward at a glance.

It is especially useful for people who like visual time awareness, including users with focus challenges such as ADHD.

---

## How it works

The extension uses your current system time to calculate:

* how many seconds have passed since the start of the day
* what percentage of the day is complete
* a visual progress bar that updates continuously

Everything runs locally in the browser.

No accounts, no tracking, no sync, no external services.

---

## Installation

### Load unpacked in Chrome

1. Download or clone this repository
2. Open `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the project folder

---

## Project Structure

```bash
assets/
  icons/
    icon-16.png
    icon-32.png
    icon-48.png
    icon-128.png

src/
  background.js
  index.html
  popup.js
  style.css

manifest.json
README.md
privacy-policy.md
```

---

## Privacy

**Today’s Progress does not collect, store, or share any personal data.**

The extension only uses the current system time to calculate and display the daily progress bar.

All processing happens locally on the user’s device.

For more details, see the [Privacy Policy](./privacy-policy.md).

---

## Tech Stack

* HTML
* CSS
* JavaScript
* Chrome Extension Manifest V3

---

## Notes

This project is intentionally simple.

The goal is not to overload the interface with features, but to provide a small and useful visual reminder of time passing throughout the day.

---

## Future Ideas

* Optional custom themes
* More progress styles
* Motivational micro-text
* Custom start/end day settings
* Percentage on browser action tooltip

---

## License

This project is for personal and educational use unless otherwise specified.

---


