#!/usr/bin/env node

const puppeteer = require('puppeteer');

(async function run() {
  let failures = 0;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on("console", m => {
    console.log(...m.args().map(a => a._remoteObject.value));
  });

  await page.exposeFunction('testsFailed', n => {
      failures = n;
    }
  );

  await page.goto(`file://${process.argv[2]}/index.html`);

  await browser.close();

  if (failures > 0) {
    process.exit(1);
  }
})();
