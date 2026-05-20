# Plan: OctoCAT Supply — Full Project Delivery Plan

## Context
- Project: OctoCAT Supply v2.0 — GitHub Copilot workshop/demo app (smart cat supply chain)
- Team: 5–8 people (devs, QA, PM, designer, marketing)
- Sprint length: 3 weeks
- Deadline: 3 months from May 20, 2026 → August 20, 2026
- Total sprints: 4 sprints + 1 pre-sprint kickoff + 1-week launch buffer
- Scope: Research → Design → Development → Testing → Documentation → Marketing → Launch

---

## Sprint Breakdown

### Pre-Sprint (May 20–23, 4 days) — Kickoff & Setup
- Project kickoff meeting, team onboarding
- Repo access, dev environment setup (Node, Docker)
- Define roles: PM, 2 devs, QA, designer, marketing
- Define Definition of Done for the project
- Review existing codebase together (OctoCAT Supply)
- Set up project tracking board (GitHub Projects)
- Draft workshop audience personas (beginner/intermediate developers)

---

### Sprint 1: Research (May 24 – Jun 13, 3 weeks)
**Theme: Understand before building**

Activities:
1. Technical Research
   - Audit current stack gaps (no auth, no DB, no validation, no CI)
   - Benchmark: Zod vs Joi for validation, Playwright vs Cypress for E2E
   - Document Architecture Decision Records (ADRs)
2. Market Research
   - Competitive analysis: other Copilot demo repos, AI workshop materials
   - Identify differentiators for OctoCAT Supply as a showcase
3. User Research
   - Identify 3 workshop personas: Beginner Dev, Experienced Dev, Instructor/Facilitator
   - Define 5–6 Copilot hands-on scenarios (e.g., test generation, agent mode, MCP)
   - Interview 2–3 potential workshop participants or instructors
4. UX Audit
   - Identify missing flows: product detail, wishlist, order history, reviews
   - Audit mobile responsiveness gaps
5. Deliverables: Research report, persona docs, ADRs, finalized feature scope, workshop scenario outline

---

### Sprint 2: Design + Backend Hardening + DevOps (Jun 14 – Jul 4, 3 weeks)
**Theme: Foundation and infrastructure**

Activities:
1. UI/UX Design
   - Wireframes for missing pages: product detail, wishlist, order history, reviews
   - Refine design system (Tailwind tokens, component states, dark mode)
   - Accessibility checklist
2. Backend Development
   - Add missing API tests: Order, OrderDetail, Delivery, Headquarters, OrderDetailDelivery (target 80%+ coverage)
   - Add input validation with Zod on all POST/PUT routes
   - Add health check endpoint (`GET /health`)
   - Add pagination + filtering query param support
   - Standardize error responses (consistent 400/404/500 semantics)
3. DevOps
   - Docker Compose for local development (frontend + api together)
   - GitHub Actions workflows: CI (build, test, lint on PR), CD (deploy to Azure staging)
   - Environment variable documentation (.env.example files)
4. Workshop Infrastructure
   - Set up .github/copilot-instructions.md with project context
   - Create 3 custom prompt files (.github/prompts/)
   - Define MCP server integration docs
5. Deliverables: Design mockups, improved backend (80%+ test coverage), CI/CD pipeline, Docker Compose

---

### Sprint 3: Frontend Development + Integration + Testing (Jul 5 – Jul 25, 3 weeks)
**Theme: Feature completion and quality**

Activities:
1. Frontend Features
   - Product Detail page (route + component)
   - Wishlist feature (wire up WishlistContext to UI)
   - Order History page (wire up existing OrderHistory.tsx)
   - Product Reviews UI (display + submit reviews)
   - Error boundaries + loading skeleton states
   - Responsive mobile navigation menu
   - Auth persistence (sessionStorage/token handling)
   - Form validation feedback on Checkout
2. Frontend Testing
   - Unit tests with React Testing Library: Cart, Checkout, Products, Login
   - Integration tests for Auth + Cart flows
3. End-to-End Testing
   - E2E with Playwright: full purchase flow, admin product management, login
   - E2E coverage for 3 critical user journeys
4. Workshop Scenarios
   - Validate and finalize 5–6 hands-on Copilot exercises
   - Create participant starter files / branches
   - Set up .github/agents/ with custom chat agents
5. Deliverables: Feature-complete frontend, full test suite (unit + integration + E2E), workshop exercises validated

---

### Sprint 4: Documentation + Marketing + Polish (Jul 26 – Aug 15, 3 weeks)
**Theme: Ship-ready and promote**

Activities:
1. Technical Documentation
   - Comprehensive root README (setup, architecture, contributing guide)
   - Improved Swagger/OpenAPI spec with examples
   - Architecture diagrams (ER diagram, component diagram, deployment diagram)
   - Workshop Facilitator Guide (how to run the session)
   - Participant Workbook (step-by-step exercises with hints)
2. Marketing Assets
   - Landing page / product site for OctoCAT Supply workshop
   - Demo video / screencast (5–7 min Copilot feature walkthrough)
   - Social media content: 3–5 posts for LinkedIn/X/Bluesky
   - 1–2 blog posts: "Building a supply chain app with GitHub Copilot" / "AI pair programming in practice"
   - Speaker slides deck (for conference/workshop delivery)
3. Polish
   - UI refinements based on Sprint 3 feedback
   - Performance audit (Lighthouse score target: 90+)
   - Accessibility audit (WCAG 2.1 AA)
   - Security review (OWASP Top 10 check)
4. Deliverables: All documentation, marketing assets, polished production-ready app

---

### Launch Buffer (Aug 16–20, 1 week) — Deploy & Announce
- Final smoke testing on staging
- Production deployment to Azure (using infra/configure-deployment.sh)
- Publish landing page + social media posts
- Publish blog posts
- Workshop "open registration" announced
- Post-launch retrospective

---

## Timeline Summary

| Sprint | Dates | Theme | Key Deliverables |
|--------|-------|-------|-----------------|
| Pre-Sprint | May 20–23 | Kickoff | Setup, roles, board |
| Sprint 1 | May 24 – Jun 13 | Research | Research report, ADRs, workshop scenarios outline |
| Sprint 2 | Jun 14 – Jul 4 | Design + Backend + DevOps | Mockups, 80%+ API test coverage, CI/CD, Docker |
| Sprint 3 | Jul 5 – Jul 25 | Frontend + Testing | Feature-complete app, E2E tests, workshop exercises |
| Sprint 4 | Jul 26 – Aug 15 | Docs + Marketing | Docs, landing page, demo video, blog posts |
| Launch | Aug 16–20 | Deploy & Announce | Live deployment, published marketing |

---

## Files to Modify / Create

### Backend
- `api/src/routes/order.test.ts` — create
- `api/src/routes/orderDetail.test.ts` — create
- `api/src/routes/delivery.test.ts` — create
- `api/src/routes/headquarters.test.ts` — create
- `api/src/routes/orderDetailDelivery.test.ts` — create
- `api/src/routes/*.ts` — add Zod validation
- `api/src/index.ts` — add health endpoint, error middleware

### Frontend
- `frontend/src/components/entity/product/ProductDetail.tsx` — create
- `frontend/src/components/entity/order/OrderHistory.tsx` — wire up routing
- `frontend/src/components/entity/wishlist/Wishlist.tsx` — create
- `frontend/src/components/entity/review/Reviews.tsx` — create
- `frontend/src/App.tsx` — add new routes
- Frontend test files — create (*.test.tsx)

### DevOps
- `docker-compose.yml` — create at root
- `.github/workflows/ci.yml` — create
- `.github/workflows/cd.yml` — create
- `.env.example` — create for api + frontend
- `api/.env.example`, `frontend/.env.example` — create

### Documentation
- `README.md` — major update
- `CONTRIBUTING.md` — create
- `docs/FACILITATOR_GUIDE.md` — create
- `docs/PARTICIPANT_WORKBOOK.md` — create
- `docs/ARCHITECTURE.md` — create
- `api/api-swagger.json` — improve

### Marketing
- `marketing/landing-page/` — create
- `marketing/social-media/` — create
- `marketing/blog-posts/` — create
- `marketing/demo-script.md` — create

---

## Decisions & Scope
- In-memory data store stays (no DB migration needed for demo context)
- No real auth backend; admin check via @github.com email stays
- Zod chosen for validation (TypeScript-first, no extra deps)
- Playwright chosen for E2E (modern, fast, native Vite support)
- Landing page is separate from the app itself (separate marketing folder)
- Docker Compose covers local dev; Azure deployment uses existing infra scripts
