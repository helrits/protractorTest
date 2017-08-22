var KabooLoginPageObject = require ('./login.pageObject.js');

describe('Kaboo login page - successful login', function() {

    beforeEach(function () {
        kabooLoginPageObject = new KabooLoginPageObject();
    });

    it ('should open login page', function() {
        kabooLoginPageObject.openLoginPage();
    });

    it ('should fill all fields correctly', function() {
        kabooLoginPageObject.setUsername('htest00');
        kabooLoginPageObject.setPassword('1Aaaaaaa');
        //browser.sleep(1000);
    });

    it ('should click login button', function() {
        kabooLoginPageObject.login();
    });

    it ('should display successful message', function() {
        kabooLoginPageObject.noteMessageBoxDisplayed();
        kabooLoginPageObject.successMessageDisplayed();
    });

    it ('should refirect user to profile page', function() {
        kabooLoginPageObject.userRedirectedToProfilePage();
    });

} );