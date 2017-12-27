let GooglePage = require('../pageObjects/GoogleStartPage.js').GoogleStartPage;
let BasePage = require('../pageObjects/BasePage.js').BasePage;


describe('Google sign in', () => {
    let EC = protractor.ExpectedConditions
    let googlePage = new GooglePage();
    let basePage = new BasePage();
   
    beforeEach(() => {
        basePage.getUrl('https://google.com');
    });
   
    it("Should not be able to sign in with invalid credentials", () => {
        googlePage.clickSignInLnk();
        googlePage.typeEmailOrPhoneTxt('notExistingEmailForFullscreen');
        googlePage.clickNextLnk();

        expect(EC.visibilityOf(googlePage.EmailOrPhoneErrorLbl), 5000,
        'Error message "Couldn\'t find your Google Account" should be visible');
        
        expect(EC.invisibilityOf(googlePage.ProfileIdentifier), 5000,
        'Profile Identifier should not be visible');
    });

})

