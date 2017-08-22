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
    var nextButton         = element(by.css('[ng-click="forceValidateFields(formSignup)"]'));

    var firstname          = element(by.css('[name="firstname"]'));
    var lastname           = element(by.css('[name="lastname"]'));
    var bDay               = element(by.css('[name="days"]'));
    var bMonth             = element(by.css('[name="months"]'));
    var bYear              = element(by.css('[name="years"]'));
    var sexF               = element(by.css("label[for='sexFemale']"));
    var address            = element(by.css('[name="address"]'));
    var postCode           = element(by.css('[name="postalCode"]'));
    var city               = element(by.css('[name="city"]'));
    var country            = element(by.model('authModel.country'));


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
        browser.sleep(5000);
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

    this.setCountryAustria = function () {
        country.click();
       // browser.sleep(9000);
    };
};

module.exports = KabooSignupPageObject;