# Learning Portal — Nested Navigation Website

## Overview
This project implements a responsive website with a nested navigation homepage (3 subjects → 4 topics each) and 12 individual topic pages. Each topic page contains a **Back** button that returns to the homepage and **resets the view** to show only the three top-level subjects.

## Objectives
- Build a responsive HTML website with nested navigation using HTML, CSS, and JavaScript
- Create and link multiple topic pages (12 total)
- Implement a Back functionality that returns to the homepage (collapsed state)
- Deploy via a free hosting provider (e.g., GitHub Pages)
- Document site structure and navigation logic

## Technologies
- HTML5, CSS3, Vanilla JavaScript
- Free hosting: GitHub Pages (recommended)

## Site Structure
```
responsive-site/
├─ index.html
├─ assets/
│  ├─ styles.css
│  ├─ script.js
│  └─ img/
│     ├─ cover.svg
│     └─ (per-topic placeholder images)
└─ topics/
   ├─ mathematics/
   │  ├─ algebra.html
   │  ├─ geometry.html
   │  ├─ calculus.html
   │  └─ statistics.html
   ├─ science/
   │  ├─ physics.html
   │  ├─ chemistry.html
   │  ├─ biology.html
   │  └─ astronomy.html
   └─ history/
      ├─ ancient-history.html
      ├─ medieval-history.html
      ├─ renaissance.html
      └─ modern-history.html
```

## Navigation Logic
- **Homepage (index.html):** Three subject cards. Clicking **View topics** toggles a topic list beneath the subject using JS `classList` show/hide.
- **Accordion behavior:** When you open one subject, other lists collapse for clarity on mobile.
- **Topic pages:** Each topic is a separate HTML file. The **Back** button links to `index.html` (no hash), ensuring the homepage loads in its default, *collapsed* state.

## Mobile Responsiveness
- CSS Grid adapts from 3 → 2 → 1 columns based on viewport width.
- Buttons and touch targets use generous spacing and 16px+ font sizes.

## How to Run Locally
1. Download/unzip the project.
2. Open `index.html` in your browser (double‑click). No build step required.

## Deploy on GitHub Pages
1. Create a new repo (e.g., `learning-portal`).
2. Upload the contents of `responsive-site/` to the repo root (so `index.html` is at the root).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
4. Select the `main` branch and root (`/`), then **Save**.
5. Wait for Pages to publish, then visit the provided URL (format: `https://<username>.github.io/<repo>/`).

## Known Assumptions / Notes
- Placeholder **SVG images** are used and included locally (no external network).
- “Back” resets to collapsed homepage by using a direct `index.html` link with no fragment/query.
- You can replace placeholder images with real ones (keep file names or update the HTML).

## Testing Checklist
- [ ] On the homepage, tapping **View topics** reveals the correct four topics.
- [ ] Only one subject’s topics are visible at a time (others collapse).
- [ ] Each topic link opens the correct topic page.
- [ ] **Back** on every topic page returns to the homepage with all subjects collapsed.
- [ ] Layout works on desktop and mobile dimensions.
- [ ] Site loads correctly from the GitHub Pages public URL.

---

© 2025. Built for coursework.
