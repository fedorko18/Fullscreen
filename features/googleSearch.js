let GooglePage = require('../pageObjects/GoogleStartPage.js').GoogleStartPage;
let BasePage = require('../pageObjects/BasePage.js').BasePage;
let FullscreenPage = require('../pageObjects/FullscreenPage.js').FullscreenPage;



describe('Google search', () => {
    let EC = protractor.ExpectedConditions
    let googlePage = new GooglePage();
    let basePage = new BasePage();
    let fullscreenPage = new FullscreenPage();
   
    beforeEach(() => {
        basePage.getUrl('https://google.com');
        googlePage.searchItem('fullscreen direct');
    });

    it('Should verify results page displays more than five results', () => {
        browser.wait(EC.visibilityOf(googlePage.SearchResultTwo), 3000,
         'Second result should appear');  
         browser.wait(EC.visibilityOf(googlePage.SearchResultThree), 3000,
         'Third result should appear');  
         browser.wait(EC.visibilityOf(googlePage.SearchResultFour), 3000,
         'Fourth result should appear');  
         browser.wait(EC.visibilityOf(googlePage.SearchResultFive), 3000,
         'Fifth result should appear');  
         browser.wait(EC.visibilityOf(googlePage.SearchResultSix), 3000,
         'Sixth result should appear');
    });

    it('Should verify that first search result has URL: https://www.fullscreendirect.com/', () => {
        expect(googlePage.getFirstResultUrl().getText()).toContain('https://www.fullscreendirect.com/', 'Fullscreen link in search results is "https://www.fullscreendirect.com/"');
    });

    it('Should redirect to Fullscreen after click on item from search result', () => {
                googlePage.clickFirstResultUrl();
                fullscreenPage.navBarIsVisible();
            });
})
