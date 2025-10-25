# 12Cycle Landing — Manual QA Checklist

Run this checklist before each release candidate cut. Verify items on both desktop and mobile breakpoints unless noted otherwise.

## Environments

- Local dev server (`npm run dev`)
- Production preview (`npm run preview` after `npm run build`)

## Browsers & Devices

- Desktop: Chrome (latest), Firefox (latest)
- Mobile simulation: Chrome DevTools Device Mode (iPhone 14, Galaxy S23)
- Optional physical device smoke test if available

## Visual & Layout

1. Hero gradient fills viewport, CTA buttons align center, glass card blur renders.
2. Grid sections (Key Stats, Tokenomics, How To Buy) retain 12/6/3-column layouts at ≥1280px and collapse cleanly on mobile.
3. Chart iframe maintains 16:9 aspect and scrolls independently on small screens.
4. Footer disclaimer text readable in dark mode; skip-link focus ring visible when tabbing.

## Navigation & Interaction

1. Header links and brand mark smooth-scroll to each section without changing URL path (no router warnings in console).
2. Intersection highlighting updates header link color when sections enter view.
3. Hero CTA copy button writes to clipboard and surfaces toast; hover/tap motion respects reduced-motion setting (toggle in OS or DevTools).
4. Mobile nav toggle traps focus and closes after selection.

## Embeds & External Integrations

1. Dexscreener chart loads, transitions from skeleton to iframe, and external link opens new tab.
2. X/Twitter embed populates timeline; on rate-limit, fallback card displays with Visit button.
3. Clipboard toast and IntersectionObserver still function when DevTools throttling is enabled (Slow 3G profile).

## Accessibility Checks

1. Run Chrome Lighthouse → Accessibility. Target score ≥90.
2. Tab order follows visual flow; skip link appears on first tab and moves focus to main.
3. Screen reader quick scan (VoiceOver / NVDA) announces section headings in order.
4. Ensure `aria-live` messages (hero toast, community loading/error) announce without repetition.

## Console & Network

- Console free of errors/warnings in every tested browser.
- Network tab: no 404s for `/og-image.png`, `/scripts/twitter-widget.js`, or favicons.

## Known Issues / Follow-ups

- Twitter embed may intermittently fail due to platform rate limiting; fallback message is expected.
- Intersection highlighting relies on scroll; unit test coverage exists, but watch for regression if updating observer thresholds.

Log any deviations or new issues in GitHub Issues with reproduction steps and browser details.
