
const selectorsList = {
    signUpButton: '[href="/signup"]',
    firstNameField: '#firstName',
    lastNameField: '#lastName',
    usernameField: '#username',
    passwordField: '#password',
    confirmPasswordField: '#confirmPassword',
    signUpSubmitButton:'[data-test="signup-submit"]',
    withoutFirstNameText: '#firstName-helper-text', 
    withoutLastNameText: '#lastName-helper-text',
    withoutUsernameText: '#username-helper-text',
    withoutPasswordText: '#password-helper-text',
    confirmPasswordText: '#confirmPassword-helper-text',
    bodyGrid: '.App-root',
}

describe('Register an account', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Registrar novo usuário com sucesso', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).type('Caroline')
        cy.get(selectorsList.lastNameField).type('Ferraz')
        cy.get(selectorsList.usernameField).type('Carol')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.confirmPasswordField).type('s3cret')
        cy.get(selectorsList.signUpSubmitButton).click()
        cy.url().should('include', 'http://localhost:3000/signin')
    })

    it('Registrar novo usuário sem First Name', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).click()
        cy.get(selectorsList.lastNameField).type('Ferraz')
        cy.get(selectorsList.usernameField).type('Carol')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.confirmPasswordField).type('s3cret')
        cy.get(selectorsList.withoutFirstNameText).should('be.visible')
        cy.get(selectorsList.withoutFirstNameText).contains('First Name is required')
    })

    it('Registrar novo usuário sem Last Name', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).type('Caroline')
        cy.get(selectorsList.lastNameField).click()
        cy.get(selectorsList.usernameField).type('Carol')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.confirmPasswordField).type('s3cret')
        cy.get(selectorsList.withoutLastNameText).should('be.visible')
        cy.get(selectorsList.withoutLastNameText).contains('Last Name is required')
    })

    it('Registrar novo usuário sem Username', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).type('Caroline')
        cy.get(selectorsList.lastNameField).type('Ferraz')
        cy.get(selectorsList.usernameField).click()
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.confirmPasswordField).type('s3cret')
        cy.get(selectorsList.withoutUsernameText).should('be.visible')
        cy.get(selectorsList.withoutUsernameText).contains('Username is required')
    })

    it('Registrar novo usuário sem Password', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).type('Caroline')
        cy.get(selectorsList.lastNameField).type('Ferraz')
        cy.get(selectorsList.usernameField).type('Carol')
        cy.get(selectorsList.passwordField).click()
        cy.get(selectorsList.confirmPasswordField).type('s3cret')
        cy.get(selectorsList.withoutPasswordText).should('be.visible')
        cy.get(selectorsList.withoutPasswordText).contains('Enter your password')
        cy.get(selectorsList.confirmPasswordText).should('be.visible')
        cy.get(selectorsList.confirmPasswordText).contains('Password does not match')
    })

    it('Registrar novo usuário sem confirmação do Password', () => {
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameField).type('Caroline')
        cy.get(selectorsList.lastNameField).type('Ferraz')
        cy.get(selectorsList.usernameField).type('Carol')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.confirmPasswordField).click()
        cy.get(selectorsList.bodyGrid).click()
        cy.get(selectorsList.confirmPasswordText).should('be.visible')
        cy.get(selectorsList.confirmPasswordText).contains('Confirm your password')
    })
});


