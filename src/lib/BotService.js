const fs = require('fs/promises');
const webdriver = require('selenium-webdriver');
const chrome = require('chromedriver');
const Helper = require('./Helper.js');
const {client_password, client_username} = require('./config');
const {logging} = require("selenium-webdriver");
const {Logs} = require("selenium-webdriver/lib/webdriver");
let opts = { 'args': ['--disable-gpu'] };//'--headless',--incognito


function BotService() {

  //  const helper = new Helper();
    const timeout = 10000; //10second
    let driver = null; 

    this.login = async function(){ ////button[text()='Sign in']
        let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(opts).build();
        url = "https://betnomi.me/";
        await driver.get(url);
       try {
            //const response = await driver.executeScript('browserstack_executor: {"action": "getSessionDetails"}');
           // console.log(response);
           let signIn = await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div/div/div[1]/header/div[3]/button[2]')), 30000)
           //let text1 = await driver.executeScript("return arguments[0].innerHTML;", text)

           await driver.executeScript("arguments[0].click();", signIn);
           await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("/html/body/div[4]/div/div/div/form/div[1]/div/input")), 10000).sendKeys(client_username);
           await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("/html/body/div[4]/div/div/div/form/div[2]/div/input")), 10000).sendKeys(client_password);
           let logIn = await driver.wait(webdriver.until.elementLocated(webdriver.By.className('styles_submit_button__2xWm1')), 10000)
           await driver.executeScript("arguments[0].click();", logIn);

       } catch (err) {
           console.log(err)
       }
        return driver;
    }

    this.close = async function(){
        await this.driver.close();
    }
}

module.exports = BotService;