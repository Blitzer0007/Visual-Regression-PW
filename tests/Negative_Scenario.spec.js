// @ts-check
import { test, expect } from '@playwright/test';

// example.spec.js
test('Visual Comparison Fail Scenario', async ({ page },testinfo) => {
  //await page.goto('https://superset.datatest.ch/superset/explore/?form_data_key=vP6zgie87qSb4OMCFshsooudGR3C9DHwHr688EE7nMVuDQPxzJkIZM-ZZHPtQHzD&slice_id=133');
  await page.goto('https://www.chartjs.org/docs/latest/samples/area/line-stacked.html')
  await page.waitForTimeout(3000)
  await page.waitForLoadState()

  expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 200 });
  const screenshot = await page.screenshot();
  await testinfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  

});

