let GooglePage = require('../pageObjects/GoogleStartPage.js').GoogleStartPage;
let BasePage = require('../pageObjects/BasePage.js').BasePage;



describe('Google homepage', () => {
    let EC = protractor.ExpectedConditions
    let googlePage = new GooglePage();
    let basePage = new BasePage();
   
    beforeEach(() => {
        basePage.getUrl('https://google.com');
    });
   
    it('Should verify that logo is visible', () => {
        browser.wait(EC.visibilityOf(googlePage.Logo), 5000,
            'Logo should be visible');
    });

    it('Should verify that search entry field is visible', () => {
        browser.wait(EC.visibilityOf(googlePage.SearchTxt), 5000,
            'Search Field should be visible');
    });

    it('Should verify that Sign in button is visible', () => {
        browser.wait(EC.visibilityOf(googlePage.SignInLnk), 5000,
            'Sign in button should be visible');
    });

    it('Should verify that Im feeling lucky button is visible', () => {
        browser.wait(EC.visibilityOf(googlePage.ImFeelingLuckyLnk), 5000,
            'Im feeling lucky button should be visible');
    });

})

