import { test, expect } from '@playwright/test';

test('take screenshots of the landing page', async ({ page }) => {
    // Go to the landing page
    await page.goto('/');

    // Wait for network to be idle to ensure assets are loaded
    await page.waitForLoadState('networkidle');

    // Specific wait for the hero image just in case
    await page.waitForSelector('img[alt="Hero Compliance Training"]', { state: 'visible', timeout: 10000 }).catch(() => {
        console.log('Hero image selector might be different or not found in time, proceeding.');
    });

    // Wait a bit for animations (like the Lenis scroll or fade-ins) to settle
    await page.waitForTimeout(2000);

    // Take a full page screenshot
    await page.screenshot({ path: 'test-results/screenshots/landing-page-full.png', fullPage: true });

    // Take a viewport screenshot
    await page.screenshot({ path: 'test-results/screenshots/landing-page-viewport.png' });
});
