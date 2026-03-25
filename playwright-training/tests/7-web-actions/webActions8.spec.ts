import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

// OrangeHRM demo login page URL used for the live screenshot
const LOGIN_URL =
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// Full path to the baseline/reference PNG (playwright-training/files/orange.png)
const referenceImagePath = path.join(__dirname, '..', '..', 'files', 'orange.png');

test('Visual testing: compare login page to reference orange.png', async ({
    page,
}, testInfo) => {

    // 1. Read the reference image file from disk into a buffer
    const refBuffer = fs.readFileSync(referenceImagePath);

    // 2. Decode the PNG so we can read width, height, and raw pixel data
    const refPng = PNG.sync.read(refBuffer);

    // 3. Get reference image dimensions (viewport will match these for a fair compare)
    const { width, height } = refPng;

    // 4. Resize the browser viewport to match the reference image size
    await page.setViewportSize({ width, height });

    // 5. Open the OrangeHRM login page
    await page.goto(LOGIN_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 60_000,
    });

    // 6. Wait until the username field is visible so the page is ready for screenshot
    await page
        .getByRole('textbox', { name: /username/i })
        .waitFor({ state: 'visible', timeout: 30_000 });
    console.log('Login page loaded and username field is visible');

    // 7. Capture the current viewport as a PNG buffer (same size as reference)
    const actualBuffer = await page.screenshot({ type: 'png' });

    // 8. Decode the screenshot PNG for pixel-by-pixel comparison
    const actualPng = PNG.sync.read(actualBuffer);

    // 9. Verify screenshot width matches reference (otherwise pixelmatch cannot run)
    expect(
        actualPng.width,
        `Screenshot width (${actualPng.width}) must match reference (${width}). ` +
            'Use the same viewport size as the reference PNG or regenerate orange.png.',
    ).toBe(width);

    // 10. Verify screenshot height matches reference
    expect(
        actualPng.height,
        `Screenshot height (${actualPng.height}) must match reference (${height}).`,
    ).toBe(height);

    // 11. Create an empty PNG buffer to store the visual diff output from pixelmatch
    const diffPng = new PNG({ width, height });

    // 12. Compare reference vs actual pixels; diff pixels are written into diffPng
    const diffPixelCount = pixelmatch(
        refPng.data,
        actualPng.data,
        diffPng.data,
        width,
        height,
        { threshold: 0.1 },
    );

    // 13. Total pixels in the image (for percentage and messages)
    const totalPixels = width * height;

    // 14. Express mismatch as a percentage for easier reading in failures
    const diffPercent = ((diffPixelCount / totalPixels) * 100).toFixed(2);
    console.log(
        'Pixel comparison complete. Differing pixels: ' +
            diffPixelCount +
            ' (' +
            diffPercent +
            '% of viewport)',
    );

    // 15. Build output folder under this test run (test-results/.../visual-compare)
    const outDir = path.join(testInfo.outputDir, 'visual-compare');

    // 16. Ensure the output directory exists
    fs.mkdirSync(outDir, { recursive: true });

    // 17. File paths for diff image and copy of actual screenshot
    const diffPath = path.join(outDir, 'diff.png');
    const actualPath = path.join(outDir, 'actual.png');

    // 18. Write the diff image (highlights where pixels differ)
    fs.writeFileSync(diffPath, PNG.sync.write(diffPng));

    // 19. Save the actual screenshot next to the diff for side-by-side review
    fs.writeFileSync(actualPath, actualBuffer);
    console.log('Saved diff and actual screenshots under: ' + outDir);

    // 20. Attach reference image to the HTML report
    await testInfo.attach('reference (orange.png)', {
        path: referenceImagePath,
        contentType: 'image/png',
    });

    // 21. Attach actual screenshot to the HTML report
    await testInfo.attach('actual viewport screenshot', {
        path: actualPath,
        contentType: 'image/png',
    });

    // 22. Attach pixel diff image to the HTML report
    await testInfo.attach('pixel diff (red highlights)', {
        path: diffPath,
        contentType: 'image/png',
    });

    // 23. Assert zero pixel differences (strict baseline); open report if this fails
    expect(
        diffPixelCount,
        `Visual mismatch: ${diffPixelCount} of ${totalPixels} pixels differ (${diffPercent}%). ` +
            `Open the HTML report or inspect: ${diffPath}`,
    ).toBe(0);
    console.log('Visual match: reference and live page screenshots are identical');
});
