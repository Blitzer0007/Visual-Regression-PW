// @ts-check
import { test, expect } from '@playwright/test';

// example.spec.js
test('Visual Comparison Positive Scenario', async ({ page },testinfo) => {
  //await page.goto('https://superset.datatest.ch/superset/explore/?form_data_key=vP6zgie87qSb4OMCFshsooudGR3C9DHwHr688EE7nMVuDQPxzJkIZM-ZZHPtQHzD&slice_id=133');
  await page.goto('https://apexcharts.com/javascript-chart-demos/mixed-charts/line-column-area/')
  await page.waitForTimeout(3000)
  await page.waitForLoadState()
  await page.waitForTimeout(2000)

  await page.click("//img[@title='Close']")
  await page.waitForTimeout(2000)

  expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 200 });
  const screenshot = await page.screenshot();
  await testinfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  

});

