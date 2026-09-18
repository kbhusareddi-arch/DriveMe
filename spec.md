# DriveMe Master Dashboard Unification - Product Requirements Document

## Overview
- **Summary**: Unify all existing DriveMe Learner and Trainer HTML pages into a fully connected live website with a Master Dashboard. Wire every interactive button across all pages to navigate between the complete Learner and Trainer user flows.
- **Purpose**: Transform isolated DriveMe page prototypes into one cohesive, navigable web application where users can complete the entire Learner and Trainer journeys end-to-end through clickable, interconnected interfaces.
- **Target Users**:
  - Learners: Individuals seeking driving education who need to complete the full booking and training flow
  - Trainers: Certified driving instructors who need to manage lessons, schedules, and earnings
  - Website Visitors: Potential users landing on the Home Page who choose their journey path

## Goals
- Create a single-entry `index.html` (Home Page) that serves as the "front door" of DriveMe with role selection
- Build a unified Master Dashboard architecture with shared navigation for both user types
- Connect every existing Learner page in the exact flow order: Login → Profile → Goal → Trainer → Vehicle → Time → Pickup → Review → Payment → Confirmation → Lesson → Progress → Exam → History
- Connect every existing Trainer page in the exact flow order: Login → Registration → Verification → Admin Review → Dashboard → Schedule → Lessons → Navigation → Verify Student → Start → Live Tracking → Curriculum → End → Earnings
- Wire every interactive button, CTA, and navigation element with proper page-to-page navigation
- Ensure consistent brand styling across all pages using the DriveMe Academy Design System
- Create a root-level index.html as the landing page with proper links to sub-pages

## Non-Goals
- Backend API integration or real database persistence (pure front-end navigation prototype)
- Payment processing or real financial transactions
- Real-time GPS or geolocation tracking implementation (UI-only demonstration)
- User authentication backend or OTP validation
- Mobile app development or PWA features
- Multi-language localization beyond existing English content
- Accessibility compliance auditing beyond existing standards in pages

## Background & Context
The project repository contains 40+ individual DriveMe page folders, each with a `code.html` file implementing a specific UI screen. These pages follow the DriveMe Academy Design System (`driveme_academy/DESIGN.md`) with:
- **Primary Color**: Deep Navy `#0F1E36`
- **Secondary Color**: Road Orange `#F26A1B` / `#fc7123`
- **Tertiary Color**: Verified Emerald `#10B981`
- **Typography**: Plus Jakarta Sans with Material Symbols Outlined icons
- **Framework**: Tailwind CSS CDN with custom design tokens
- **Layout**: 12-col desktop / 4-col mobile responsive grid with 1280px max container

**Existing Learner Pages (14 screens)**:
1. `driveme_learner_login/code.html` - Login/OTP Authentication
2. `driveme_profile_setup/code.html` - Learner Profile Setup
3. `driveme_choose_goal/code.html` - Learning Goal Selection
4. `driveme_find_trainer/code.html` - Trainer Discovery & Selection
5. `driveme_select_vehicle/code.html` - Vehicle Type Selection
6. `driveme_select_time/code.html` - Time Slot Selection
7. `driveme_pickup_location/code.html` - Pickup Address Input
8. `driveme_review_booking/code.html` - Booking Review Summary
9. `driveme_payment/code.html` - Payment Processing
10. `driveme_booking_confirmation/code.html` - Booking Confirmation
11. `driveme_live_lesson/code.html` - Active Lesson Session
12. `driveme_learner_progress/code.html` - Skill Progress Dashboard
13. `driveme_driving_exam_guide/code.html` - Exam Preparation
14. `driveme_lesson_history/code.html` - Lesson History

**Existing Trainer Pages (18 screens)**:
1. `driveme_trainer_login/code.html` - Trainer Portal Login
2. `driveme_trainer_registration/code.html` - Trainer Registration
3. `driveme_trainer_verification/code.html` - Document Verification
4. `driveme_trainer_admin_review_status/code.html` - Admin Review Status
5. `driveme_trainer_dashboard/code.html` - Trainer Dashboard
6. `driveme_trainer_schedule/code.html` - Schedule Management
7. `driveme_trainer_lessons/code.html` - Lessons Roster
8. `driveme_trainer_navigation/code.html` - Route Navigation
9. `driveme_verify_student/code.html` - Student Verification
10. `driveme_start_lesson/code.html` - Start Lesson
11. `driveme_trainer_live_tracking/code.html` - Live Tracking
12. `driveme_trainer_curriculum/code.html` - Curriculum Overview
13. `driveme_end_lesson_confirmation/code.html` - End Lesson
14. `driveme_trainer_earnings/code.html` - Earnings Dashboard
15. `driveme_trainer_profile/code.html` - Trainer Profile
16. `driveme_trainer_vehicles/code.html` - Vehicle Management
17. `driveme_notifications/code.html` - Notifications
18. `driveme_trainer_incident_report/code.html` - Incident Report

**Existing Home Page**: `driveme_home_page/code.html` - Landing page with role selection

## Functional Requirements

### FR-1: Root Landing Page (Home/Front Door)
- A root-level `index.html` file must exist that serves as the DriveMe website front door
- The landing page must match the visual design and content of `driveme_home_page/code.html`
- Must present two primary journey entry points: "Learn to Drive" (Learner) and "Teach with DriveMe" (Trainer)
- All navigation links in top nav (How It Works, Find a Trainer, Exam Guide, Help) must have valid anchor navigation
- "Get Started" dropdown must link to respective login pages
- "Login" button must route to Learner Login by default, with Trainer Login accessible
- Footer links must be present and functional (navigate to home or relevant sections)

### FR-2: Learner Journey Navigation Chain
Every Learner page must have correctly wired "Next" and "Back" navigation following the exact chain:
- Login → Profile Setup
- Profile Setup → Choose Goal
- Choose Goal → Find Trainer
- Find Trainer → Select Vehicle
- Select Vehicle → Select Time
- Select Time → Pickup Location
- Pickup Location → Review Booking
- Review Booking → Payment
- Payment → Booking Confirmation
- Booking Confirmation → Live Lesson (via "Start Lesson" CTA)
- Live Lesson → Learner Progress (via "End Lesson")
- Learner Progress → Driving Exam Guide (via "Exam Prep")
- Driving Exam Guide → Lesson History (via "View History")
- Lesson History → Home (via "Back to Home" or logo)

Every "Book Lesson", "Continue", "Next Step", "Proceed" type button must navigate to the correct next page.

### FR-3: Trainer Journey Navigation Chain
Every Trainer page must have correctly wired navigation following the exact chain:
- Trainer Login → Trainer Registration (new trainers) or Dashboard (existing)
- Trainer Registration → Trainer Verification
- Trainer Verification → Admin Review Status
- Admin Review Status → Trainer Dashboard (after approval)
- Trainer Dashboard → Schedule / Lessons / Earnings / Navigation (via sidebar)
- Schedule → Lessons Roster
- Lessons Roster → Trainer Navigation (start route)
- Trainer Navigation → Verify Student
- Verify Student → Start Lesson
- Start Lesson → Live Tracking
- Live Tracking → Trainer Curriculum (in-lesson)
- Live Tracking → End Lesson Confirmation (via end CTA)
- End Lesson Confirmation → Earnings Dashboard
- Earnings → Dashboard (via sidebar)

Sidebar navigation in Dashboard pages must link to all available sub-pages.

### FR-4: Master Dashboard Shared Components
- Create a shared navigation pattern: every page has the DriveMe logo that links to `index.html`
- Every page has a "Back to Home" or equivalent navigation element that returns to `index.html`
- Role switching must be possible: Learner pages have a link to Trainer Login and vice versa
- Footer on every page must have standard DriveMe links returning to home sections
- OTP/Login pages must have a role switch button to toggle between Learner and Trainer login

### FR-5: Interactive Button Wiring
EVERY interactive button across ALL pages must be functional:
- Primary CTAs: Navigate to the next logical page in the flow
- "Book Now", "Confirm", "Pay Now", "Start", "End" buttons: Execute the next flow step
- "Back", "Cancel", "Return" buttons: Navigate to the previous page in the flow
- Trainer cards "Book Lesson" buttons: Navigate to vehicle selection
- Schedule items: Navigate to lesson details
- Sidebar menu items: Navigate to respective dashboard sub-pages
- Footer utility links: Navigate to home page anchors
- Logo click: Always returns to `index.html`
- Tab switches (Learner/Trainer tabs on home): Toggle between views
- Role dropdown: Navigate to respective login/registration pages

### FR-6: File Structure and Relative Paths
- Root `index.html` exists at project root level
- All existing page files in their respective `driveme_*/code.html` locations can be optionally copied/renamed or referenced directly
- Navigation uses relative paths correctly from any page depth
- All external CDN resources (Tailwind, Fonts, Material Symbols) are correctly loaded
- All Google image URLs from existing pages are preserved

### FR-7: Exam Guide Support Pages
- `driveme_dl_test_tracks/code.html` and `driveme_traffic_signals/code.html` must be accessible from the Exam Guide page as sub-navigation tabs
- Exam Guide page must have navigation links back to Progress Dashboard

### FR-8: Dashboard Supplementary Page Access
From Trainer Dashboard sidebar:
- Notifications page must be accessible
- Trainer Profile must be accessible
- Vehicle Management must be accessible
- Incident Report must be accessible
From Learner-side navigation:
- Support page must be accessible from help links
- Notifications page must be accessible from profile areas

### FR-9: Home Page Quick Links
Home page section anchors must be valid:
- "How It Works" section → `index.html#how-it-works`
- "Find a Trainer" section → `index.html#trainers` (links then route to Find Trainer page after login)
- "Exam Guide" section → `index.html#exam-guide` (links to exam guide sub-pages)
- "Help" section → `index.html#trust` or Support page

### FR-10: Visual Consistency
Every page must maintain the DriveMe Design System:
- Same Tailwind config with DriveMe color tokens
- Same Google Fonts (Plus Jakarta Sans) loading
- Same Material Symbols icon loading
- Same spacing, borderRadius, typography tokens from DESIGN.md

## Non-Functional Requirements

### NFR-1: Performance
- Every page must load in <3 seconds on standard broadband connection (CDN resources already optimized)
- No blocking synchronous JavaScript that delays navigation
- Smooth page transitions with Tailwind hover/active states preserved

### NFR-2: Browser Compatibility
- Works correctly in latest Chrome, Edge, Firefox, and Safari desktop browsers
- Mobile-responsive breakpoints work on standard phone/tablet viewports
- All existing page responsive designs are preserved

### NFR-3: Navigation Robustness
- Zero broken links: every `<a>` tag with `href="#"` must be replaced with actual page paths
- All button JavaScript `window.location` navigations must resolve to valid relative paths
- Back navigation works correctly for every step in both flows

### NFR-4: Code Maintainability
- HTML comments are not required but code structure mirrors existing pages
- Navigation links use relative paths (not absolute filesystem paths)
- Master index.html is clearly the entry point

## Constraints
- **Technical**: Pure HTML/CSS/JavaScript front-end only. No build tools, bundlers, or frameworks. Uses CDN Tailwind CSS exclusively.
- **Business**: Must preserve the exact existing visual design of all 40+ pages. No UI redesigns. Just connection of the existing screens.
- **Dependencies**: All pages rely on external CDN resources:
  - Tailwind CSS via `cdn.tailwindcss.com`
  - Google Fonts (Plus Jakarta Sans)
  - Google Material Symbols Outlined
  - Google-hosted user-generated content images

## Assumptions
- Existing page HTML files are structurally complete and render correctly individually
- Users will test navigation through the UI flows manually (no automated test suite required)
- The Home Page design in `driveme_home_page/code.html` is the approved landing page design
- "Connecting" means replacing `href="#"` with actual relative paths + adding `onclick` handlers where buttons use JS
- Relative paths from the root index.html to pages in subfolders follow pattern: `driveme_learner_login/code.html`
- Relative paths BETWEEN subfolder pages follow pattern: `../driveme_profile_setup/code.html`

## Acceptance Criteria

### AC-1: Root Index Page Exists and Loads
- **Type**: `rule`
- **Given**: The project root directory
- **When**: Opening `index.html` in a web browser
- **Then**: The DriveMe Home Page renders correctly with full styling, brand visuals, trainer cards, and journey selection sections visible
- **Pass Condition**: `index.html` file exists at project root, browser renders the page with no broken images/styles, and the page has identical content to `driveme_home_page/code.html`
- **Evidence**: File existence check + browser screenshot of rendered home page

### AC-2: Learner Flow Navigation (14 Steps Fully Connected)
- **Type**: `rule`
- **Given**: A user starting from Home Page clicking "Start Learning" / Learner Login
- **When**: User clicks every primary CTA button through the entire Learner journey
- **Then**: User successfully navigates through all 14 pages in order: Login→Profile→Goal→Trainer→Vehicle→Time→Pickup→Review→Payment→Confirmation→Lesson→Progress→Exam→History, and can go back each step
- **Pass Condition**: Every next-step button navigates to the correct page, every back button returns to the previous page, and no navigation results in a 404/broken link
- **Evidence**: Recorded click-through path traversal or manual checklist confirmation

### AC-3: Trainer Flow Navigation (18 Steps Fully Connected)
- **Type**: `rule`
- **Given**: A user starting from Home Page clicking "Become a Trainer" / Trainer Login
- **When**: User clicks every primary CTA through the entire Trainer journey, including sidebar navigation
- **Then**: User successfully navigates through all Trainer pages in order: Login→Registration→Verification→Admin Review→Dashboard→Schedule→Lessons→Navigation→Verify Student→Start→Live Tracking→Curriculum→End→Earnings, and sidebar links work for all dashboard sub-pages
- **Pass Condition**: Every next-step button navigates correctly, sidebar links from Dashboard open correct pages, back links return appropriately
- **Evidence**: Manual navigation checklist completion or scripted link verification

### AC-4: Zero Broken Navigation Links
- **Type**: `rule`
- **Given**: All modified HTML files in the project
- **When**: Checking every `<a href>` and every JavaScript button navigation (`window.location`, `onclick`)
- **Then**: Zero `href="#"` remain on primary action CTAs and nav links; all point to valid relative file paths that resolve to existing files
- **Pass Condition**: Grep/search shows 0 remaining placeholder `href="#"` on navigation-critical elements; all links resolve to existing files
- **Evidence**: Output of search command for `href="#"` showing only intentional in-page anchors (not missing navigations)

### AC-5: Master Dashboard Shared Navigation
- **Type**: `rule`
- **Given**: Any page in the Learner or Trainer flow
- **When**: User clicks the DriveMe logo in the header
- **Then**: User returns to `index.html` (Home Page); additionally, role-switch links on login pages correctly navigate to the opposite user-type login page
- **Pass Condition**: Logo click from every page resolves to root index.html; "Continue as Trainer" from Learner Login goes to Trainer Login and vice versa
- **Evidence**: Verified logo href on every page + role switch button navigation confirmed

### AC-6: Consistent Design System Application
- **Type**: `rubric`
- **Dimension**: Visual consistency and brand adherence across all connected pages
- **Scale**: 1-5
- **Anchors**: 1 = Multiple pages have broken styling, missing fonts, or wrong color tokens; 3 = Most pages render correctly but 1-2 have minor CSS inconsistencies (missing Tailwind config, wrong font); 5 = Every page loads the DriveMe Tailwind config, Plus Jakarta Sans font, and Material Symbols with perfect visual consistency
- **Pass Threshold**: >= 4
- **Evidence**: Spot-check screenshots of 5+ pages from each flow, confirmation header/footer/CTA styling matches DESIGN.md tokens

### AC-7: Supplementary Pages Accessibility
- **Type**: `rule`
- **Given**: Trainer Dashboard sidebar and Learner help sections
- **When**: User clicks on supplementary links (Notifications, Profile, Vehicles, Incident Report, Support, DL Test Tracks, Traffic Signals)
- **Then**: All supplementary pages open correctly from their respective entry points with working back navigation
- **Pass Condition**: All 8 supplementary pages (notifications, trainer_profile, trainer_vehicles, incident_report, support, dl_test_tracks, traffic_signals, upcoming_lesson) are reachable via navigation links
- **Evidence**: Screenshot or confirmation that each supplementary page has at least one inbound navigation link

## Open Questions
- [ ] Should the root `index.html` be a COPY of `driveme_home_page/code.html` placed at root, or should there be a redirect mechanism? → Assumption: Create standalone index.html at root with same content plus updated navigation paths.
- [ ] Should navigation links use `code.html` filename directly (e.g., `driveme_learner_login/code.html`) or should folders be renamed to cleaner URLs? → Assumption: Preserve existing folder structure and use `code.html` paths directly for minimal disruption.
- [ ] Do the OTP verification pages `driveme_otp_verification_1/` and `driveme_otp_verification_2/` need to be integrated into the flows, or are they variants? → Assumption: OTP pages are variants; Login pages handle OTP inline already. If Login pages have "Send OTP" buttons that expand OTP input inline, keep existing behavior.
