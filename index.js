const { Builder, By, Key, util } = require('selenium-webdriver');

(async function runSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://127.0.0.1:5500/form.html');
    await driver.findElement(By.id('email_rightcol1')).sendKeys('xxx.huang@tw.xxx.com', Key.RETURN);
    await driver.findElement(By.id('name_rightcol1')).sendKeys('黃', Key.RETURN);
    await driver.findElement(By.id('phone_rightcol1')).sendKeys('0900123456', Key.RETURN);
    await driver.findElement(By.id('industry_rightcol1')).sendKeys('顧問服務', Key.RETURN);
    await driver.findElement(By.id('firm_rightcol1')).sendKeys('資誠聯合會計師事務所', Key.RETURN);
    await driver.findElement(By.id('region_rightcol1')).sendKeys('台北', Key.RETURN);
    await driver.findElement(By.id('position_clas_rightcol1')).sendKeys('資訊', Key.RETURN);
    await driver.findElement(By.id('position_rightcol1')).sendKeys('Senior Associate', Key.RETURN);
    await driver.findElement(By.id('telephone_rightcol1')).sendKeys('23650098', Key.RETURN);
    await driver.findElement(By.id('firm_email_rightcol1')).sendKeys('xxx.huang@tw.xxx.com', Key.RETURN);
    await driver.findElement(By.id('tax_ID_rightcol1')).sendKeys('120000', Key.RETURN);
})();