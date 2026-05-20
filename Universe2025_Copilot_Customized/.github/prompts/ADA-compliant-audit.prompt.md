---
description: "ADA Compliance Audit - Static analysis + Playwright accessibility testing to identify top 5 critical web accessibility issues. Use when: accessibility audit, ADA compliance check, WCAG validation, a11y review"
name: "ADA Compliance Audit"
argument-hint: "Target URL or component path to audit"
agent: "agent"
tools: [search, web, run_in_terminal, read_file, grep_search]
---

# ADA Web Accessibility Compliance Audit

Perform a comprehensive ADA compliance audit following the [ADA.gov Web Guidance](https://www.ada.gov/resources/web-guidance/) and WCAG 2.1 AA standards.

## Reference Standards

Fetch and reference the official ADA web accessibility guidance:
- Primary: https://www.ada.gov/resources/web-guidance/
- WCAG Guidelines: https://www.w3.org/WAI/standards-guidelines/wcag/

## Audit Process

Execute BOTH of the following in **parallel**:

### 1. Static Code Analysis
Analyze the frontend source code for accessibility violations:
- Missing or empty `alt` attributes on images
- Missing form labels and ARIA attributes
- Insufficient color contrast (check Tailwind classes)
- Missing heading hierarchy (h1 → h2 → h3)
- Missing language attributes (`lang` on `<html>`)
- Keyboard navigation issues (missing `tabindex`, focus states)
- Missing skip links for screen readers
- Inaccessible interactive elements (buttons without labels)

Search patterns to check:
- `<img` without `alt=`
- `<input` without associated `<label>` or `aria-label`
- `<button` without text content or `aria-label`
- `onClick` handlers on non-interactive elements (`<div>`, `<span>`)
- Videos/media without captions or transcripts

### 2. Playwright Accessibility Testing
Run Playwright with `@axe-core/playwright` to perform automated accessibility testing:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('accessibility audit', async ({ page }) => {
  await page.goto('<target-url>');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  
  // Report violations
  console.log(JSON.stringify(results.violations, null, 2));
});
```

If `@axe-core/playwright` is not installed, install it first:
```bash
npm install -D @axe-core/playwright
```

## Output Requirements

**DO NOT FIX any source files.** Report findings only.

Provide exactly **5 most critical issues** ranked by severity:

| # | Issue | Severity | Location | WCAG Criterion | Impact |
|---|-------|----------|----------|----------------|--------|
| 1 | ... | Critical/High | file:line or element | WCAG X.X.X | Who is affected |
| 2 | ... | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... | ... |
| 4 | ... | ... | ... | ... | ... |
| 5 | ... | ... | ... | ... | ... |

### Severity Definitions
- **Critical**: Blocks access entirely (e.g., no keyboard navigation, missing alt text on essential images)
- **High**: Significantly impairs usability (e.g., poor contrast, missing form labels)
- **Medium**: Creates barriers but workarounds exist
- **Low**: Minor inconvenience

### For Each Issue Include:
1. **What**: Specific violation description
2. **Where**: File path, line number, or DOM selector
3. **Why it matters**: Which users are impacted (blind, deaf, motor impaired, cognitive)
4. **WCAG reference**: Specific success criterion violated (e.g., WCAG 1.1.1 Non-text Content)

## Example Invocations

```
/ADA-compliant-audit http://localhost:5137
/ADA-compliant-audit frontend/src/components/
/ADA-compliant-audit the checkout flow
```
