# Assignment Submission — Nested Navigation Website

**Full Name:** Brian O'Brien  
**Course:** Web Systems (Example)  
**Instructor:** Dr Ahsan Abdullah  
**Date of Submission:** 10-06-2025

## 1) Assignment Overview (0.5 pts)
**Title:** Learning Portal — Responsive Nested Navigation  
**Objective:** Build and deploy a responsive website with a nested homepage (3 subjects → 4 topics each), 12 topic pages, and functional Back navigation returning users to a collapsed homepage.

## 2) Code Implementation (2.0 pts)
- Technology: HTML, CSS, JavaScript (vanilla).  
- Structure: `index.html` + 12 topic pages under `/topics/` + assets in `/assets/`.  
- Readability: Consistent formatting, semantic HTML, ARIA labels, comments in JS and CSS.  
- JS Features: Accordion-like show/hide for topics; Back flow returns to collapsed homepage.

## 3) Results Screenshot(s) (1.0 pt)
**Included:** `assets/img/cover.svg` (homepage hero).  
Please add deployment screenshots (homepage + one topic page) after publishing on GitHub Pages.

## 4) Data / Output Results (2.0 pts)
- Output is a working, navigable site:
  - Homepage: 3 subjects, nested topic lists
  - 12 topic pages: content (heading, paragraph, image) and Back button
  - Works on desktop and mobile

## 5) Analysis of Results (1.5 pts)
- **Correctness:** All links resolve; Back buttons return to collapsed homepage; accordion prevents clutter on small screens.  
- **Issues Encountered:** Ensuring the homepage always starts collapsed—solved by using a plain `index.html` Back link and collapsing lists on page load.  
- **Learning:** Reinforced DOM manipulation patterns, accessible toggles, and static hosting via GitHub Pages.

## 6) Conclusion (1.0 pt)
Successfully implemented a responsive nested navigation site with separate topic pages and a Back flow that restores the initial state. Future enhancements: keyboard navigation for toggles, breadcrumbs, and service worker for offline caching.

## 7) Key Reflective Questions (1.5 pts)
1. **Most challenging part?** Keeping the homepage state predictable. Using a plain Back link and collapsing lists on load removed history/fragment edge cases.  
2. **Where to add an additional feature (e.g., logging attempts)?** In `assets/script.js`, add event listeners to toggles to log interactions (e.g., to `localStorage` or a telemetry endpoint if allowed).  
3. **A mistake and lesson?** Initially left multiple topics expanded on mobile, which felt cluttered. Switching to an accordion improved clarity and UX.

## 8) Additional Comment (Bonus 0.5 pts)
Consider adding a small “Expand all”/“Collapse all” control for power users.

---

**How to deploy:** See `README.md` → GitHub Pages instructions.  
**Public URL:** Add after publishing (format: `https://<username>.github.io/<repo>/`).

