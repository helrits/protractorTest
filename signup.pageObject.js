'use strict';

var KabooSignupPageObject = function () {

    //urls
    var signupUrl = 'https://kaboo.com/en/signup';

    //elements to access
    var email              = element(by.css('[name="email"]'));
    var username           = element(by.css('[name="username"]'));
    var password           = element(by.xpath('.//input[@name=\'password\']'));
    var confirmPassword    = element(by.xpath('.//input[@name=\'passwordRepeat\']'));
    var termsAndConditions = element(by.css("label[for='termsAndConditions']"));
    var nextButton         = element(by.css('[ng-show="regStep === 1"]'));

    var firstname          = element(by.css('[name="firstname"]'));
    var lastname           = element(by.css('[name="lastname"]'));
    var bDay               = element(by.css('[name="days"]'));
    var bMonth             = element(by.css('[name="months"]'));
    var bYear              = element(by.css('[name="years"]'));
    var sexF               = element(by.css("label[for='sexFemale']"));
    var address            = element(by.css('[name="address"]'));
    var postCode           = element(by.css('[name="postalCode"]'));
    var city               = element(by.css('[name="city"]'));
    var countryMenu        = element(by.css("div[ta-items=countries]"));
    var countryAndorra     = countryMenu.all(by.repeater('item in items')).get(1);
    var currencyMenu       = element(by.css("div[ta-items=currencies]"));
    var currencyEur        = currencyMenu.all(by.repeater('item in items')).get(0);
    var phonePrefixMenu    = element(by.css("div[ta-items=phonePrefixes]"));
    var phonePrefix355     = phonePrefixMenu.all(by.repeater('item in items')).get(0);
    var phoneNumber        = element(by.css('[name="phoneNumber"]'));
    var registerNowButton  = element(by.css('[ng-show="regStep === 2"]'));
    var emailSent          = element(by.css('[ng-show="emailSent"]'));

    this.openSignupPage = function () {
        browser.driver.get(signupUrl);
        browser.waitForAngular();

        //to ensure that page is loaded
        browser.getCurrentUrl();
    };

    //generate random email address
    //TODO

    //generate random username
    //TODO

    this.setEmail = function (emailaddress) {
        email.sendKeys(emailaddress);
    };

    this.setUsername = function (user) {
        username.sendKeys(user);
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass);
    };

    this.setConfirmPassword = function (confirmPass) {
        confirmPassword.sendKeys(confirmPass);
    };

    this.acceptTermsAndContitions = function () {
        //browser.executeScript("arguments[0].scrollIntoView();", nextButton.getWebElement());
        browser.actions().mouseMove(termsAndConditions).perform();
        termsAndConditions.click();
    };

    this.clickNext = function () {
        browser.executeScript("arguments[0].scrollIntoView();", nextButton.getWebElement());
        nextButton.click();
        browser.waitForAngular();
        browser.getCurrentUrl();
        browser.sleep(3000);
    };

    this.setFirstname = function (first) {
        firstname.sendKeys(first);
    };

    this.setLastname = function (last) {
        lastname.sendKeys(last);
    };

    this.setBday = function (day) {
        bDay.sendKeys(day);
    };

    this.setBmonth = function (month) {
        bMonth.sendKeys(month);
    };

    this.setByear = function (year) {
        bYear.sendKeys(year);
    };

    this.clicksexF = function () {
        sexF.click();
    };

    this.setAddress = function (adr) {
        address.sendKeys(adr);
    };

    this.setPostalCode = function (pcode) {
        postCode.sendKeys(pcode);
    };

    this.setCity = function (cty) {
        city.sendKeys(cty);
    };

    this.setCountry = function () {
        countryMenu.click();
        countryAndorra.click();
    };

    this.setCurrency = function () {
        currencyMenu.click();
        browser.executeScript("arguments[0].scrollIntoView();", currencyEur.getWebElement());
        currencyEur.click();
    };

    this.setPhonePrefix = function () {
        phonePrefixMenu.click();
        phonePrefix355.click();
        browser.sleep(1000);
    };

    this.setPhoneNr = function (phne) {
        phoneNumber.sendKeys(phne);
        browser.sleep(1000);
    };

    this.clickRegisterNowButton = function () {
        registerNowButton.click();
        browser.waitForAngular();
        browser.getCurrentUrl();
        browser.sleep(5000);
    };

    this.emailSentMessageDisplayed = function () {
        expect(emailSent.getText()).toEqual("Email sent");
        //browser.sleep(10000);
    };

};

module.exports = KabooSignupPageObject;