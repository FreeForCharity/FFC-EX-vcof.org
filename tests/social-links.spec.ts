import { test, expect } from '@playwright/test'
import { siteConfig } from '../src/lib/site.config'

/**
 * Social Links Tests
 *
 * Verifies that:
 * 1. Every configured social link in siteConfig.social renders in the footer
 *    with the correct href and aria-label.
 * 2. Defunct platforms (like Google+) are not present.
 *
 * Config-driven: the expected links come from siteConfig.social, so this suite
 * tracks whatever platforms a given site actually configures.
 */

test.describe('Footer Social Links', () => {
  const configured = siteConfig.social.filter((s) => s.href)

  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer a[href*="plus.google.com"]')).toHaveCount(0)
    await expect(page.locator('footer a[aria-label="Google Plus"]')).toHaveCount(0)
  })

  test('should display every configured social media link', async ({ page }) => {
    await page.goto('/')
    for (const link of configured) {
      const el = page.locator(`footer a[href="${link.href}"]`)
      await expect(el).toBeVisible()
      await expect(el).toHaveAttribute('aria-label', link.label)
    }
  })

  test('should render exactly the configured number of social icons', async ({ page }) => {
    test.skip(configured.length === 0, 'No social links configured yet (pending)')
    await page.goto('/')
    const selector = configured.map((l) => `footer a[href="${l.href}"]`).join(', ')
    await expect(page.locator(selector)).toHaveCount(configured.length)
  })
})
