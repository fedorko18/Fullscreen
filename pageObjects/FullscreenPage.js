'use strict';
let EC = protractor.ExpectedConditions
let BasePage = require('../pageObjects/BasePage.js').BasePage;

class FullscreenPage extends BasePage{

    constructor() {
        super()
        this.NavBar = $('.navbar-brand');      
    }
    //Navigation bar should be visible
    navBarIsVisible() {
        browser.wait(EC.visibilityOf(this.NavBar), 3000,
        'Navigation bar should be visible');
    };
};

// Export this page object to use it in all other files
module.exports.FullscreenPage = FullscreenPage