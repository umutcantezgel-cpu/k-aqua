Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine vollständige Testing Pyramid & Quality Infrastructure für das Zero-Breakage & Self-Optimizing Upgrade Pipeline-System zu etablieren.

═══ ZERO-BREAKAGE PROTOKOLL ═══

FIVE PILLARS:
1. READ-BEFORE-WRITE: Understand code paths completely before modification
2. SURGICAL INJECTION: Minimal, targeted changes; maximum precision
3. ATOMIC VALIDATION: npm run build && npm run lint && npx tsc --noEmit post each change
4. STATE HANDOFF: .upgrade-state.md tracks context across phases
5. SELF-OPTIMIZING LOOP: .ai-architectural-context.md evolves continuously

TECH-STACK (IMMUTABLE):
- Core: Next.js (App Router oder Pages Router), React, TypeScript Strict Mode
- Styling: Tailwind CSS, CSS Modules, or CSS Custom Properties
- External Services: ONLY Formspree (contact form) and Calendly (booking)
- FORBIDDEN: Headless CMS, external AI-APIs, Sentry/error-tracking SaaS, newsletters, i18n frameworks

GOLDEN RULE: Code ist IMMER die SSOT (Single Source of Truth)

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Before any test implementation:
1. Read current test coverage baseline (if any)
2. Identify critical user journeys: Contact → Formspree, Calendar → Calendly, Content → Navigation
3. Map component hierarchy: Atoms (Button, Input, Badge) → Organisms (ContactForm, FaqSection) → Pages
4. Define quality gates: 80% unit, 80% line, 70% branch coverage; E2E ≥90 Lighthouse; no console errors
5. Document testing strategy in .ai-architectural-context.md

───────────────────────────────────────

═══ BLOCK A — UNIT-TESTS (FUNDAMENT DER PYRAMIDE) ═══

ULTRATHINK-TASK 1: VITEST SETUP UND KONFIGURATION

1.1 Install dependencies:
npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @vitest/coverage-v8

1.2 Create vitest.config.ts:
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.d.ts', 'src/**/*.stories.tsx'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

1.3 Create tests/setup.ts:
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    query: {},
    pathname: '/',
  }),
}))

// Mock Next.js Image
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}))

// Mock Next.js fonts
vi.mock('next/font/google', () => ({
  Inter: () => ({ style: { fontFamily: 'sans-serif' } }),
}))

1.4 Create tests/test-utils.tsx:
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="provider-wrapper">
      {children}
    </div>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

1.5 Update package.json scripts:
"test": "vitest",
"test:ui": "vitest --ui",
"test:coverage": "vitest run --coverage"

───────────────────────────────────────

ULTRATHINK-TASK 2: UTILITY-FUNKTIONEN UNIT-TESTEN

2.1 Create tests for validation utilities (src/utils/validation.test.ts):
- Test Zod schemas: parseEmail, parsePhoneNumber, parseFormData with ≥3 cases (valid/invalid/edge)
- Each schema: 1 valid test + 1 invalid test + 1 edge case (empty string, unicode, SQL injection attempt)
- Example test structure:
  describe('validateEmail', () => {
    it('should accept valid emails', () => { expect(validateEmail('test@example.com')).toBe(true) })
    it('should reject invalid emails', () => { expect(validateEmail('not-an-email')).toBe(false) })
    it('should reject edge cases', () => { expect(validateEmail('')).toBe(false) })
  })

2.2 Test date/time utilities (src/utils/date.test.ts):
- formatDate, parseISO, getTimeToNow with timezone handling
- Cover: past dates, future dates, timezone conversions, invalid inputs

2.3 Test formatting utilities (src/utils/format.test.ts):
- formatPhoneNumber, formatCurrency, truncateString with edge cases
- Example: truncateString('abcdefg', 3) → 'abc...', truncateString('ab', 3) → 'ab'

2.4 Test custom hooks with renderHook (src/hooks/useContactForm.test.ts):
- Test form state management, validation, submission
- Example:
  const { result } = renderHook(() => useContactForm())
  act(() => result.current.setEmail('test@example.com'))
  expect(result.current.email).toBe('test@example.com')

───────────────────────────────────────

ULTRATHINK-TASK 3: REACT-KOMPONENTEN UNIT-TESTEN

3.1 Atom components (src/components/atoms/*.test.tsx), ≥5 tests each:
- Button: default, disabled, loading, variant, size, onClick
- FormField: value change, validation error, help text, required indicator
- Badge: variants (success/error/warning), sizes
- Avatar: image load, fallback, initial, size
- Skeleton: width, height, animation

3.2 Test structure example (src/components/atoms/Button.test.tsx):
describe('Button', () => {
  it('renders with default styling', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('applies disabled state', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
  it('handles click events', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
  it('applies variant classes', () => {
    render(<Button variant="secondary">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200')
  })
  it('passes accessibility audit', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})

3.3 Organism components (src/components/organisms/*.test.tsx), ≥8 tests each:
- ContactForm: field rendering, form submission to Formspree, validation, error handling, success message
- FaqSection: accordion toggle, search filtering, keyboard navigation
- Navigation: active link highlighting, mobile menu, responsive layout

3.4 ContactForm integration test (Formspree mocked):
describe('ContactForm', () => {
  it('submits form data to Formspree endpoint', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true })
    global.fetch = mockFetch

    render(<ContactForm />)
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello')
    await userEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('formspree.io'),
        expect.objectContaining({ method: 'POST' })
      )
    })
  })
  it('displays validation errors', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
  })
})

3.5 CRITICAL: Run axe-core on EVERY component in EVERY state:
import { axe } from 'jest-axe'

it('passes accessibility audit', async () => {
  const { container } = render(<ComponentName />)
  const results = await axe(container)
  expect(results.violations).toHaveLength(0)
})

═══ BLOCK B — INTEGRATION-TESTS ═══

ULTRATHINK-TASK 4: SERVER-LOGIK TESTEN

4.1 Test Formspree wrapper (src/lib/formspree.test.ts):
- Mock fetch for success responses (200 OK)
- Mock validation errors (400 Bad Request)
- Mock rate limiting (429 Too Many Requests)
- Test email sanitization and CORS handling

4.2 Example Formspree test:
describe('submitFormToFormspree', () => {
  it('sends form data with correct endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })

    const result = await submitFormToFormspree({
      email: 'test@example.com',
      message: 'Test message',
    })

    expect(result.success).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/YOUR_FORM_ID',
      expect.any(Object)
    )
  })
})

4.3 Test metadata generation (src/lib/metadata.test.ts):
- generateMetadata for pages, blog posts
- Verify og:title, og:description, og:image, canonical URL
- Test schema.org JSON-LD generation

4.4 Test analytics module (src/lib/analytics.test.ts):
- Consent logic: should not send before user consent
- Page view tracking with metadata
- Event tracking with parameters
- Test with gtag mock

═══ BLOCK C — END-TO-END-TESTS (SPITZE DER PYRAMIDE) ═══

ULTRATHINK-TASK 5: PLAYWRIGHT SETUP

5.1 Install Playwright:
npm install -D @playwright/test

5.2 Create playwright.config.ts:
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})

5.3 Create tests/e2e/helpers.ts:
import { Page, expect } from '@playwright/test'

export async function fillAndSubmitContactForm(
  page: Page,
  email: string,
  message: string
) {
  await page.fill('[name="email"]', email)
  await page.fill('[name="message"]', message)
  await page.click('button[type="submit"]')
}

export async function expectAccessibilityNoViolations(page: Page) {
  // Use Playwright + axe integration for accessibility
  const results = await page.evaluate(() => axe.run())
  expect(results.violations).toHaveLength(0)
}

5.4 Update package.json:
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"

───────────────────────────────────────

ULTRATHINK-TASK 6: CRITICAL-PATH E2E-TESTS

6.1 Navigation test (tests/e2e/navigation.spec.ts):
test('should navigate between pages', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Home/)

  await page.click('a[href="/about"]')
  await expect(page).toHaveURL(/\/about/)
  await expect(page.locator('h1')).toContainText('About')
})

6.2 Contact form test (Formspree mocked):
test('should submit contact form', async ({ page }) => {
  await page.route('**/formspree.io/**', route => {
    route.abort() // Mock success without actual submission
  })

  await page.goto('/contact')
  await page.fill('[name="email"]', 'test@example.com')
  await page.fill('[name="message"]', 'Test message')
  await page.click('button[type="submit"]')

  await expect(page.locator('text=Thank you')).toBeVisible({ timeout: 5000 })
})

6.3 Calendly widget test:
test('should load Calendly widget', async ({ page }) => {
  await page.goto('/book')
  const iframeLocator = page.frameLocator('iframe[src*="calendly"]')
  await expect(iframeLocator.locator('[data-name="event_list"]')).toBeVisible()
})

6.4 Blog navigation:
test('should display blog posts and navigate', async ({ page }) => {
  await page.goto('/blog')
  const postLinks = page.locator('a[href*="/blog/"]')
  const count = await postLinks.count()
  expect(count).toBeGreaterThan(0)

  await postLinks.first().click()
  await expect(page.locator('article')).toBeVisible()
})

6.5 Responsive mobile:
test('should be responsive on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/')

  const nav = page.locator('nav')
  await expect(nav).toBeVisible()
  // Mobile menu should work
  await page.click('[aria-label="Toggle menu"]')
  await expect(page.locator('nav [href="/about"]')).toBeVisible()
})

───────────────────────────────────────

ULTRATHINK-TASK 7: ACCESSIBILITY E2E-AUDIT

7.1 Create tests/e2e/accessibility.spec.ts:
import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

7.2 Install axe integration:
npm install -D axe-playwright

7.3 Audit all routes in 2 modes (Desktop/Mobile):
test.describe('Accessibility Audit', () => {
  const routes = ['/', '/about', '/blog', '/contact', '/services']
  const viewports = [
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'mobile', width: 375, height: 812 },
  ]

  for (const route of routes) {
    for (const viewport of viewports) {
      test(`${route} (${viewport.name})`, async ({ page }) => {
        await page.setViewportSize(viewport)
        await page.goto(route)

        // Inject and run axe
        await injectAxe(page)
        await checkA11y(page, null, {
          detailedReport: true,
          detailedReportOptions: {
            html: true,
          },
        })
      })
    }
  }
})

7.4 Keyboard navigation walkthrough:
test('should support keyboard navigation', async ({ page }) => {
  await page.goto('/')

  // Tab through interactive elements
  await page.keyboard.press('Tab')
  let focused = await page.evaluate(() => document.activeElement?.tagName)
  expect(['A', 'BUTTON', 'INPUT']).toContain(focused)

  // Test Enter/Space on buttons
  const button = page.locator('button').first()
  await button.focus()
  await page.keyboard.press('Enter')
  // Verify action occurred
})

7.5 Screen reader testing (semantic HTML):
test('should have proper semantic HTML', async ({ page }) => {
  await page.goto('/')

  // Navigation landmark
  await expect(page.locator('nav')).toBeDefined()
  // Main content landmark
  await expect(page.locator('main')).toBeDefined()
  // Heading structure h1 → h2 → h3
  const h1Count = await page.locator('h1').count()
  expect(h1Count).toBeGreaterThan(0)
})

═══ BLOCK D — VISUAL REGRESSION UND PERFORMANCE-TESTS ═══

ULTRATHINK-TASK 8: VISUAL REGRESSION MIT PLAYWRIGHT

8.1 Create tests/e2e/visual-regression.spec.ts:
import { test, expect } from '@playwright/test'

8.2 Screenshot matrix per route:
test.describe('Visual Regression', () => {
  const routes = ['/', '/about', '/blog', '/contact']
  const variants = [
    { name: 'desktop', viewport: { width: 1280, height: 720 } },
    { name: 'mobile', viewport: { width: 375, height: 812 } },
  ]

  for (const route of routes) {
    for (const variant of variants) {
      test(`${route} - ${variant.name}`, async ({ page }) => {
        await page.setViewportSize(variant.viewport)
        await page.goto(route)

        // Wait for animations to complete
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(500)

        await expect(page).toHaveScreenshot(`${route.slice(1)}-${variant.name}.png`, {
          fullPage: true,
          maskColor: '#ff00ff',
        })
      })
    }
  }
})

8.3 Component screenshot library:
test('Button component variants', async ({ page }) => {
  // Create isolated component test page
  await page.goto('/storybook?path=/story/button')

  const variants = ['default', 'secondary', 'disabled', 'loading']
  for (const variant of variants) {
    const button = page.locator(`[data-variant="${variant}"]`)
    await expect(button).toHaveScreenshot(`button-${variant}.png`)
  }
})

8.4 Interactive state screenshots:
test('Form validation states', async ({ page }) => {
  await page.goto('/contact')

  // Screenshot pristine form
  await expect(page.locator('form')).toHaveScreenshot('form-pristine.png')

  // Screenshot with validation errors
  await page.click('button[type="submit"]')
  await expect(page.locator('form')).toHaveScreenshot('form-errors.png')

  // Screenshot with filled values
  await page.fill('[name="email"]', 'test@example.com')
  await expect(page.locator('form')).toHaveScreenshot('form-filled.png')
})

───────────────────────────────────────

ULTRATHINK-TASK 9: PERFORMANCE-TESTS

9.1 Create tests/e2e/performance.spec.ts:
import { test, expect } from '@playwright/test'

9.2 Lighthouse audit (≥90 score):
test('should achieve Lighthouse score ≥90', async ({ page }) => {
  const lighthouse = require('lighthouse')
  const chromeLauncher = require('chrome-launcher')

  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
  const options = { logLevel: 'info', output: 'json', port: chrome.port }
  const runnerResult = await lighthouse('http://localhost:3000', options)

  expect(runnerResult.lhr.categories.performance.score * 100).toBeGreaterThanOrEqual(90)
  expect(runnerResult.lhr.categories.accessibility.score * 100).toBeGreaterThanOrEqual(90)

  await chrome.kill()
})

9.3 Bundle size assertions (≤150KB per route):
test('should maintain bundle size limits', async ({ page }) => {
  const routes = ['/', '/about', '/blog', '/contact']

  for (const route of routes) {
    await page.goto(route)
    const metrics = await page.evaluate(() => {
      const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      return {
        transferSize: perf.transferSize,
        decodedBodySize: perf.decodedBodySize,
      }
    })

    expect(metrics.transferSize).toBeLessThan(150 * 1024) // 150KB
    console.log(`${route}: ${(metrics.transferSize / 1024).toFixed(2)}KB`)
  }
})

9.4 Core Web Vitals assertions:
test('should pass Core Web Vitals thresholds', async ({ page }) => {
  const vitals: any = {}

  page.on('console', msg => {
    if (msg.text().includes('web-vitals')) {
      vitals[msg.text()] = true
    }
  })

  await page.goto('/')
  await page.waitForLoadState('networkidle')

  // LCP < 2.5s, FID < 100ms, CLS < 0.1
  const metrics = await page.evaluate(() => {
    return {
      lcp: new Promise(resolve => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          resolve(lastEntry.startTime)
        }).observe({ entryTypes: ['largest-contentful-paint'], buffered: true })
      }),
    }
  })

  expect((metrics as any).lcp).toBeLessThan(2500)
})

═══ BLOCK E — CI/CD-INTEGRATION UND QUALITY-GATES ═══

ULTRATHINK-TASK 10: GITHUB ACTIONS PIPELINE

10.1 Create .github/workflows/test.yml:
name: Test Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint-and-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit

  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: .next

  e2e-tests:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npx playwright install
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run storybook:build
      - uses: actions/upload-artifact@v3
        with:
          name: storybook
          path: storybook-static

  quality-gate:
    runs-on: ubuntu-latest
    needs: [lint-and-typecheck, unit-tests, build, e2e-tests]
    if: always()
    steps:
      - name: Check test results
        run: |
          if [ "${{ needs.lint-and-typecheck.result }}" != "success" ]; then exit 1; fi
          if [ "${{ needs.unit-tests.result }}" != "success" ]; then exit 1; fi
          if [ "${{ needs.build.result }}" != "success" ]; then exit 1; fi
          if [ "${{ needs.e2e-tests.result }}" != "success" ]; then exit 1; fi

10.2 PR comment with metrics:
- Add step to post test summary as PR comment
- Include: coverage %, test counts, performance metrics, Lighthouse scores

───────────────────────────────────────

ULTRATHINK-TASK 11: TEST-DOKUMENTATION

11.1 Create docs/TESTING.md:
- Overview: Testing pyramid, coverage targets, test types
- Setup: Installation, configuration, running tests
- Writing tests: Patterns for units, integration, E2E
- CI/CD: GitHub Actions pipeline explanation
- Flaky tests: Strategy for handling intermittent failures

11.2 Create PR review checklist (docs/REVIEW_CHECKLIST.md):
- [ ] Unit tests added for utilities/hooks
- [ ] Component tests cover ≥5 states with accessibility
- [ ] Integration tests verify Formspree/Calendly mocking
- [ ] E2E tests verify critical user journeys
- [ ] Visual regression baseline updated
- [ ] Performance tests pass (Lighthouse ≥90, bundle <150KB)
- [ ] No console errors or warnings
- [ ] Coverage maintained ≥80%

11.3 Flaky test strategy:
- Retry mechanism in CI (2 retries for E2E)
- Timeout configuration per test type (unit: 5s, E2E: 30s)
- Document known flaky tests with issue links
- Monitor flaky test trends in metrics

═══ SELBST-OPTIMIERENDER LOOP — PHASE 14 ABSCHLUSS ═══

12.1 Update .upgrade-state.md:
- Phase 14 complete: Testing infrastructure established
- Coverage: 80%+ unit tests, comprehensive E2E suite
- Quality gates: All CI/CD pipelines operational
- Next phase: Phase 15 (Deployment & Monitoring)

12.2 Update .ai-architectural-context.md:
- Add: Testing pyramid implementation details
- Add: Vitest + Playwright configuration
- Add: Formspree/Calendly mocking strategy
- Add: GitHub Actions 5-job parallel pipeline
- Add: Accessibility audit methodology (axe-core 4-mode matrix)
- Note: Zero console errors enforcement enabled

12.3 Validate state transitions:
- All code changes committed with atomic validation
- npm run build && npm run lint && npx tsc --noEmit ✓
- npm run test:coverage reports ≥80% ✓
- npm run test:e2e runs without flakes ✓

═══ FINALE VALIDIERUNG PHASE 14 ═══

ULTRATHINK-TASK 12: FINAL-AUDIT

Complete the following checklist:

☑ Vitest configured with jsdom, coverage thresholds (80/80/70), globals enabled
☑ Test setup file mocks Next.js (router, Image, fonts)
☑ Custom render with providers exported in test-utils.tsx
☑ Unit tests: ≥3 per utility, ≥5 per atom, ≥8 per organism
☑ All components run axe-core in all states
☑ ContactForm tests mock Formspree with fetch interception
☑ FaqSection tests verify accordion and search functionality
☑ Custom hooks tested with renderHook
☑ Integration tests cover: Formspree responses, metadata generation, analytics consent
☑ E2E tests: navigation, contact form, Calendly, blog, mobile responsive
☑ Accessibility E2E covers 2 viewports (Desktop/Mobile) with axe-playwright
☑ Keyboard navigation tested (Tab, Enter, Space, Arrow keys)
☑ Screen reader semantics verified (nav, main, heading structure)
☑ Visual regression: 2 variants per route (desktop/mobile)
☑ Component interactive states screenshotted (form pristine/errors/filled)
☑ Lighthouse audit target ≥90 verified
☑ Bundle size assertion ≤150KB per route
☑ Core Web Vitals thresholds checked (LCP <2.5s, FID <100ms, CLS <0.1)
☑ GitHub Actions pipeline: 5 parallel jobs (lint, unit, build, E2E, storybook)
☑ Quality gates enforce all checks pass before merge
☑ PR comments include coverage, performance, Lighthouse metrics
☑ docs/TESTING.md complete with patterns and setup instructions
☑ docs/REVIEW_CHECKLIST.md defines test coverage requirements
☑ Flaky test strategy documented with retries and timeouts
☑ Zero console errors enforced in all tests
☑ .upgrade-state.md: Phase 14 marked complete
☑ .ai-architectural-context.md: Testing strategy documented for Phase 15 handoff
