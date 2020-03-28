const puppeteer = require('puppeteer')

const outbreak = async () => {
  const baseUrl = 'https://www.outbreak.my/stats'
  const browser = await puppeteer.launch({ args: ['--no-sandbox'], ignoreDefaultArgs: ['--disable-extensions'] })
  const page = await browser.newPage()
  await page.goto(baseUrl)

  const scrapeData = await page.evaluate(() => {
    const dataArray = []
    const cases = document.querySelectorAll('.card')

    cases.forEach(item => {
      try {
        const number = item.querySelector('.card-header').querySelector('.card-title').querySelector('strong')
        const nationality = item.querySelector('tbody').querySelectorAll('tr')[0].querySelector('td')
        const age = item.querySelector('tbody').querySelectorAll('tr')[1].querySelectorAll('td')[0]
        const gender = item.querySelector('tbody').querySelectorAll('tr')[1].querySelectorAll('td')[1]

        const info = {
          number: number.innerText,
          nationality: nationality.innerText,
          age: age.innerText,
          gender: gender.innerText
        }

        dataArray.push(info)
      } catch (error) {
        console.log(error)
      }
    })
    return dataArray
  })

  await browser.close()
  return scrapeData
}

module.exports = outbreak
