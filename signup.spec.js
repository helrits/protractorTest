var KabooSignupPageObject = require ('./signup.pageObject.js');

describe('Kaboo signup page - successful signup', function() {

    beforeEach(function () {
        kabooSignupPageObject = new KabooSignupPageObject();
    });

    it ('should open signup page', function() {
        kabooSignupPageObject.openSignupPage();
    });

    it ('should fill all fields with valid data on step 1', function() {
        kabooSignupPageObject.setEmail('test2834798324@yopmail.com');
        kabooSignupPageObject.setUsername('user2342442342');
        kabooSignupPageObject.setPassword('1Aaaaaaaa');
        kabooSignupPageObject.setConfirmPassword('1Aaaaaaaa');
        kabooSignupPageObject.acceptTermsAndContitions();
    });

    it ('should click next', function() {
        kabooSignupPageObject.clickNext();
    });

    it ('should fill all fields with valid data on step 2', function() {
        kabooSignupPageObject.setFirstname("Testfirstname");
        kabooSignupPageObject.setLastname("Testlastname");
        kabooSignupPageObject.setBday("29");
        kabooSignupPageObject.setBmonth("02");
        kabooSignupPageObject.setByear("1996");
        kabooSignupPageObject.clicksexF();
        kabooSignupPageObject.setAddress("Testaddress 1-1");
        kabooSignupPageObject.setPostalCode("12312");
        kabooSignupPageObject.setCity("Tallinn");
        kabooSignupPageObject.setCountry();
        kabooSignupPageObject.setCurrency();
        kabooSignupPageObject.setPhonePrefix();
        kabooSignupPageObject.setPhoneNr("12345678909");
    });

    it ('should click register now', function() {
        kabooSignupPageObject.clickRegisterNowButton();
    });

    it ('should display email sent message', function() {
        kabooLoginPageObject.emailSentMessageDisplayed();
    });

} );