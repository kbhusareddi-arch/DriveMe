---
name: DriveMe Academy
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#44474d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#515f7a'
  primary: '#000412'
  on-primary: '#ffffff'
  primary-container: '#0f1e36'
  on-primary-container: '#7886a3'
  inverse-primary: '#b8c7e6'
  secondary: '#a14000'
  on-secondary: '#ffffff'
  secondary-container: '#fc7123'
  on-secondary-container: '#5b2100'
  tertiary: '#000703'
  on-tertiary: '#ffffff'
  tertiary-container: '#002416'
  on-tertiary-container: '#009969'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#b8c7e6'
  on-primary-fixed: '#0c1b33'
  on-primary-fixed-variant: '#394761'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb694'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7b2f00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-base:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-medium:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  badge-micro:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  spacing-2xs: 0.25rem
  spacing-xs: 0.5rem
  spacing-sm: 0.75rem
  spacing-md: 1rem
  spacing-lg: 1.5rem
  spacing-xl: 2rem
  spacing-2xl: 3rem
  spacing-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 1280px
---

## Brand & Style
The design system establishes an atmosphere of absolute safety, confidence, road authority, and modern digital ease. Bridging structured driver education with effortless mobility booking, the visual voice is reassuring, decisive, and forward-moving. 

The aesthetic is **Corporate Modern with High-Contrast Tactical Accents**. It avoids childish gamification while steering clear of bureaucratic, outdated DMV tropes. Instead, it projects the polish of an elite modern mobility platform: crisp white card planes, deep nautical navy infrastructure representing structural reliability, energetic road-curve orange signaling progression and clear callouts, and clean slate-toned typography that ensures immediate clarity during high-stakes booking and verified scheduling workflows.

## Colors
The color architecture relies on a sharp, daylight-first contrast model calibrated for absolute legibility across navigation tables, time slot grids, and instructor profiles.

- **Primary Deep Navy (`#0F1E36`)**: Anchor color for headers, dominant brand blocks, critical controls, and primary button states. Communicates safety, stability, and institutional credibility.
- **Secondary Driving Orange (`#F26A1B`)**: Kinetic visual accelerator used for direct conversion actions (booking confirmations, CTA buttons, active route highlights, progress rings).
- **Tertiary Verified Emerald (`#10B981`)**: Dedicated trust token used exclusively for DMV/state-certified badges, background-checked stamps, five-star score tallies, and test passes.
- **Neutrals & Surfaces**:
  - `Surface Base`: `#FFFFFF`
  - `Surface Subdued`: `#F8FAFC` (app canvas, calendar backdrops)
  - `Border Neutral`: `#E2E8F0` (clean dividing lines, input frames)
  - `Text Neutral Primary`: `#0F172A` (high-density information, names, rates)
  - `Text Neutral Muted`: `#475569` (lesson descriptions, metadata, subtitles)

## Typography
Typographic hierarchy is powered by **Plus Jakarta Sans**, utilizing its geometric clarity, wide aperture, and modern balance. 

- **Titles & Display**: Heavy structural weights (700 and 800) with slight negative tracking provide editorial punch and command visual gravity in search banners and instructor headlines.
- **Body & Data**: Regular (400) and Medium (500) weights maintain crisp optical separation inside dense scheduling matrices, car specifications, and transmission tags.
- **Labels & Micro-Badges**: Small capsule metadata leverages uppercase or semi-bold styling with positive tracking to optimize scan speeds for credentials like "DUAL-CONTROL CAR", "AUTOMATIC", and "STATE LICENSED".

## Layout & Spacing
The layout follows a 12-column responsive fluid grid on desktop (`1280px` max-width container, `24px` gutters, `32px` page padding) collapsing into a 4-column system on mobile devices (`16px` gutters, `16px` safe edge margins).

- **Vertical Rhythm**: Built strictly on an 8-point base unit, using 4px steps only for compact form items and status tags.
- **Section Spacing**: Generous 48px to 64px gaps between distinct functional zones (e.g., filter bar to card feed, package selection to instructor roster) prevent user fatigue during transaction journeys.
- **Adaptive Reflow**: In mobile contexts, multi-step booking selectors shift to sticky bottom operational trays, while instructor cards transform from horizontal split layouts to vertical stacked cards.

## Elevation & Depth
Depth is handled through crisp structural layering, relying on low-contrast hairline borders paired with soft, cool-tinted ambient shadows rather than heavy blurs.

- **Level 0 (Canvas Base)**: `#F8FAFC` flat surface.
- **Level 1 (Cards, Profiles & Panels)**: `#FFFFFF` surface with a crisp 1px solid border (`#E2E8F0`) and an ambient shadow `0 1px 3px 0 rgba(15, 30, 54, 0.05), 0 1px 2px -1px rgba(15, 30, 54, 0.05)`.
- **Level 2 (Hover States & Active Cards)**: Elevated `#FFFFFF` surface with an upgraded road shadow `0 10px 15px -3px rgba(15, 30, 54, 0.08), 0 4px 6px -4px rgba(15, 30, 54, 0.04)` and subtle border highlight (`#CBD5E1`).
- **Level 3 (Modals, Popovers, Schedule Flyouts)**: High-altitude layer with a deep drop shadow `0 20px 25px -5px rgba(15, 30, 54, 0.12), 0 8px 10px -6px rgba(15, 30, 54, 0.06)` bordered by `#E2E8F0`.

## Shapes
Shapes evoke friendliness without compromising professional discipline, relying primarily on `12px` to `16px` curvature.

- **Standard Containers & Cards**: Set to `12px` (`0.75rem`) for compact components and `16px` (`1rem`) for primary cards and search modules.
- **Form Controls & Inputs**: Form fields and buttons follow a uniform `10px` to `12px` radius for tactile alignment.
- **Micro Tags & Chips**: Fully pill-shaped (`9999px`) to create an immediate optical contrast against rectangular card frames.

## Components

### Buttons
- **Primary CTA (Direct Conversion)**: `#F26A1B` background, `#FFFFFF` text, font-weight 600, 12px border radius. Hover: `#D8580D`. Active: slight 0.98 scale compression.
- **Secondary / Authoritative Action**: `#0F1E36` background, `#FFFFFF` text. Used for instructor discovery, session booking, and account confirmation.
- **Outline / Filter Button**: `#FFFFFF` background, 1.5px border `#E2E8F0`, `#0F172A` text. Hover: border color turns to `#0F1E36` with subtle `#F8FAFC` background fill.

### Instructor & Booking Cards
- Base container: `#FFFFFF` surface, `16px` border-radius, 1px `#E2E8F0` stroke.
- Media split: Left/top zone houses the instructor portrait with vehicle badge overlay ("Dual-Control SUV").
- Metadata alignment: Clear tabular layout featuring instructor rating (`#10B981` star icon + `0F172A` text), completed lesson counter (`#475569`), hourly rate pinned prominently to the top-right in Navy 700 weight, and an orange "Book Lesson" button anchored at the card bottom.

### Chips & Badges
- **Verified Instructor Badge**: `#ECFDF5` emerald tint fill, `#059669` text, `#10B981` inline check-shield icon, `9999px` pill border radius.
- **Vehicle Type Chip**: `#F1F5F9` background, `#334155` text, 12px pill styling with subtle road/car glyphs.
- **Transmission Indicator**: Bold micro caps ("AUTO" / "MANUAL") set in a high-contrast pill with `#0F1E36` text on `#E2E8F0`.

### Form Fields & Search Inputs
- Default: Height 48px, `#FFFFFF` surface, 1px `#CBD5E1` border, `10px` radius, typography `body-base` (`#0F172A`), placeholder `#94A3B8`.
- Focus state: 2px ring `#F26A1B` with an offset of 0px, reinforcing brand identity at the exact moment of user input.

### Checkboxes & Radios
- Checkbox: 20x20px square with 6px rounded corners, `#E2E8F0` border. Checked: `#F26A1B` background with white check mark icon.
- Radio (Transmission & Lesson Type selection): 20x20px circle, `#E2E8F0` border. Selected: 6px solid dot in `#0F1E36` surrounded by white buffer.

### Slot & Schedule Selectors
- Available slot: `#FFFFFF` surface, 1px border `#E2E8F0`, centered time text (`14px`, 600 weight). Hover: `#FFF7ED` fill with `#F26A1B` outline.
- Selected slot: Solid `#0F1E36` fill with pure `#FFFFFF` typography.
- Unavailable slot: `#F8FAFC` background, dashed `#E2E8F0` border, strikethrough text in `#94A3B8`.