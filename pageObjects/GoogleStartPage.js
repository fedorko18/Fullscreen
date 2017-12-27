'use strict';
let EC = protractor.ExpectedConditions
let BasePage = require('../pageObjects/BasePage.js').BasePage;

class GoogleStartPage extends BasePage{

    constructor() {
        super()
        this.Logo = $('#hplogo');
        this.SearchTxt = $('#lst-ib');
        this.SignInLnk = $('#gb_70');
        this.ImFeelingLuckyLnk = $('#gbqfbb');
        this.EmailOrPhoneTxt = $('#identifierId');
        this.ProfileIdentifier = $('#profileIdentifier');
        this.NextLnk = $('#identifierNext');
        this.EmailOrPhoneErrorLbl = element(by.xpath('//div[contains(text(),"Couldn\'t find your Google Account")]'));

        this.SearchResultTwo = $('.srg .g:nth-child(1)');
        this.SearchResultThree = $('.srg .g:nth-child(2)');
        this.SearchResultFour = $('.srg .g:nth-child(3)');
        this.SearchResultFive = $('.srg .g:nth-child(4)');
        this.SearchResultSix = $('.srg .g:nth-child(5)');

        this.CheckFirstPage = $('.cur');
        this.ResultItemFirst = $$('.r > a');
        this.ResultUrl = $$('._Rm');
    }
    //Search item by google
    searchItem(value = '') {
        this.SearchTxt.click();
        this.SearchTxt.sendKeys(value);
        this.SearchTxt.sendKeys(protractor.Key.ENTER);
        browser.wait(EC.and(EC.visibilityOf(this.CheckFirstPage)), 3000,
         'Page should appear');   
    };
    //Click on sign in button
    clickSignInLnk() {
        return this.SignInLnk.click();
    };
    //Type in username
    typeEmailOrPhoneTxt(value = '') {
        return this.EmailOrPhoneTxt.sendKeys(value);
    };
    //Click on 'Next' button
    clickNextLnk() {
        return this.NextLnk.click();
    }
    //Get first result url
    getFirstResultUrl() {
        return this.ResultUrl.first();
    }
    //Click first result url
    clickFirstResultUrl() {
        return this.ResultItemFirst.first().click();
    }

};

// Export this page object to use it in all other files
module.exports.GoogleStartPage = GoogleStartPage
