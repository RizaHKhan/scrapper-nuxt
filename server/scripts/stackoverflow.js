const puppeteer = require('puppeteer')

const stackoverflow = async () => {
  const baseUrl = 'https://stackoverflow.com/questions/tagged/java'
  const browser = await puppeteer.launch({ args: ['--disable-gpu', '--no-sandbox', '--lang=en-US', '--disable-setuid-sandbox', '--disable-dev-shm-usage'], ignoreDefaultArgs: ['--disable-extensions'] })
  const page = await browser.newPage()
  await page.goto(baseUrl, { waitUntil: 'networkidle2' })
  // const navigationPromise = page.waitForNavigation()

  const scrapedData = await page.evaluate(() => {
    const dataArray = []

    const titles = document.querySelectorAll('.summary > h3')

    titles.forEach(title => {
      try {
        dataArray.push(title.innerText)
      } catch (err) {
        console.log(err)
      }
    })
    return dataArray
  })
  await browser.close()
  return scrapedData
}

module.exports = stackoverflow
