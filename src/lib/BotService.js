const fs = require('fs/promises');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('chromedriver');
const Helper = require('./Helper.js');
const {logging} = require("selenium-webdriver");
//let nextPort = 9222
let opts = { 'args': ['--disable-gpu'] };//'--headless',--incognito

function BotService() {

  //  const helper = new Helper();
    const timeout = 10000; //10second
    let driver = null; 

    this.login = async function(){ ////button[text()='Sign in']
        let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(opts).build();
        //driver.manage().window().maximize()
        url = "https://www.sas.am/";
        await driver.get(url);
        const element = webdriver.By.className('page-header__left'); //styles_buttons__3SHBq
        await driver.wait(webdriver.until.elementLocated(element), 10000);

        //btn = await driver.wait(driver.findElement(webdriver.By.xpath("//button[text()='Sign in']")), 20000);
        //btn = await driver.findElement(webdriver.By.xpath("//button[text()='Sign in']"))

        //btn = await driver.findElement(webdriver.By.xpath("/html/body/div/div/div[1]/header/div[2]/a[2]"))
        btn = await driver.findElement(webdriver.By.className("menu-toggler js-menu-toggler"))
        //console.log(btn.getText())
        btn.click()
        //console.log(btn.getText())
        // await driver.wait(webdriver.until.elementLocated(webdriver.By.id('email')), timeout);
        // driver.findElement(webdriver.By.id('email')).sendKeys(user.username);
        // driver.findElement(webdriver.By.id('password')).sendKeys(user.password);
        // driver.findElement(webdriver.By.id('logInBtn')).click();
        // await driver.wait(webdriver.until.elementLocated(webdriver.By.id('btnSendCode')), timeout);
        // driver.findElement(webdriver.By.id('btnSendCode')).click();
        // await driver.wait(webdriver.until.elementLocated(webdriver.By.id('twoFactorCode')), timeout);
        // driver.findElement(webdriver.By.id('twoFactorCode')).sendKeys(user.code);
        // await driver.findElement(webdriver.By.id('btnSubmit'), 20000).click();
        //
        // await driver.wait(webdriver.until.elementLocated(webdriver.By.className('icon-transfer')), 30000).click();
        // driver.takeScreenshot().then(image => {
        //     require('fs').writeFileSync('screen.png', image, 'base64');
        //     helper.log(order.id+'-',image)
        // }).catch(err => console.log(err));
        // const screen = await driver.takeScreenshot();
        // await helper.log(order.id+'-',screen);

        return driver;
    }

    this.close = async function(){
        await this.driver.close();
    }
}

module.exports = BotService;