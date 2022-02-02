const puppeteer = require('puppeteer')

take_screenshot = async () => {
    let browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.screenshot({ path: 'img/screenshot.png' })
    await browser.close()
}

take_screenshot();
