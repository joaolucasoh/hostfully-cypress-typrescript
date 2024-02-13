/*global Given, Then, When */
import { AddAComputer } from "../support/pageobjects/addComputerPage";
import { HomePage } from "../support/pageobjects/homePage";

const computerPage = new AddAComputer();
const home = new HomePage();

beforeEach(() => {
    cy.visitHome();
});

it("Add new computer with all fields filled in", () => {
    home.btnAddComputer().should('be.visible').click();

    computerPage.fillAllFields();
    computerPage.buttonCreateComputer().click()

    home.validateMessage()
}),

it("Add new computer with required fields", () => {
    home.btnAddComputer().should('be.visible').click();

    computerPage.fillRequiredFields();
    computerPage.buttonCreateComputer().click()

    home.validateMessage()
});

it("Trying to create a computer without fill in the required fields", () => {
    home.btnAddComputer().should('be.visible').click();

    computerPage.fillOnlyNotRequiredFields();
    computerPage.buttonCreateComputer().click()

    computerPage.checkRequiredFieldNotFilled();
});

it("Filter computers by brands", () => {
    home.imInListingPage();
    
    home.inputFilterByName().type('ASUS');
    home.btnFilterByName().click();

    home.validateTableResult('contain')
})

it("Delete a computer from the list", () => {
    let laptop = 'Macbook'
    home.imInListingPage();

    home.inputFilterByName().type(laptop);
    home.btnFilterByName().click();

    home.clickOnTheFirstRegisterToDelete(laptop);
    computerPage.buttonDeleteComputer().should('be.visible')

    computerPage.buttonDeleteComputer().click({force: true});
    home.validateMessage();

    home.inputFilterByName().type(laptop);
    home.btnFilterByName().click();
    home.validateTableResult('not.be.visible');
});