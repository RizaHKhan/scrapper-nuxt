# scrapper-nuxt

> Custom Built Scrapping Scripts

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
# MY-SCRAPPER

## TABLE OF CONTENTS:
1. SCRAPPER SETUP
2. SCRAPPER OPTIONS
3. DATABASE CONNECTION

## Scrapper Setup:
1. import puppeteer `const puppeteer = require('puppeteer');`
2. Start an async function:
      ```
      const functionName = async () => {

      }
      ```
3. Create a base URL variable `const baseUrl = 'https//www.example.com'`
4. Create a broser variable `const browser = await puppeteer.launch({ headless: true })`
5. Create a page variable `const pager = await browser.newPage()`
6. Use the page variable to vist the baseURL
`await page.goto(baseUrl, { waitUntil: 'newworkidle2' })`
6. Calculations are performed inside a `evaluate` function:
      ```
      const scrapedData = await page.evaluate(() => {

      })
      ```
7. Close tht browser `await browser.close()`

## Scrapper Setup for Pagination
1.

## DATABASE CONNECTION
Connection String: `mongo "mongodb+srv://to-do-list-s6ku5.mongodb.net/test" --username <username>`
