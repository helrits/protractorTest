'use strict';

var KabooLoginPageObject = function () {

    //urls
    var loginUrl = "https://kaboo.com/en/login";
    var profileUrl = "https://kaboo.com/en/profile";

    //elements to access
    var username       = element(by.css('[name="username"]'));
    var password       = element(by.css('[name="password"]'));
    var loginButton    = element(by.id('submitLogin'));
    var noteMessageBox = element(by.xpath(".//div[@class='m-site-notification__item is-current']"));
    var successMessage = element(by.xpath(".//div[@class='m-site-notification__content']"));

    this.openLoginPage = function () {
        browser.driver.manage().window().maximize();
        browser.driver.get(loginUrl);
        browser.waitForAngular();
    };

    this.setUsername = function (user) {
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass);
    };

    this.login = function () {
        loginButton.click();
    };
    this.noteMessageBoxDisplayed = function () {
        browser.wait(function() {
            return noteMessageBox.isPresent();
        }, 10000);
    };

    this.successMessageDisplayed = function () {
        expect(successMessage.getText()).toEqual("Hi htest00, good to see you!");
    };

    this.userRedirectedToProfilePage = function () {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch(profileUrl);
    }


};

module.exports = KabooLoginPageObject;