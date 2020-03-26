const puppeteer = require('puppeteer')

const checklist = async () => {
  const baseUrl = 'https://checklist-rk.herokuapp.com/'
  const browser = await puppeteer.launch({ args: ['--no-sandbox'], ignoreDefaultArgs: ['--disable-extensions'] })
  const page = await browser.newPage()
  await page.goto(baseUrl)

  const scrapeData = await page.evaluate(() => {
    const dataArray = []
    const tasks = document.querySelectorAll('.task__description')

    tasks.forEach((task) => {
      try {
        dataArray.push(task.innerText)
      } catch (err) {
        console.log(err)
      }
    })
    return dataArray
  })
  await browser.close()
  return scrapeData
}

module.exports = checklist
