
const selectorsList = {
    usernameField: '#username',
    passwordField: '#password',
    signInButton: '[type="submit"]',
    bodyGridConfirm: '.css-1idn90j-MuiGrid-root',

    wrongCredentialsAlert: '[data-test="signin-error"]',

}

describe('Login successful', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Deve fazer login com usuário válido', () => {
        cy.get(selectorsList.usernameField).type('Dina20')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.bodyGridConfirmgridConfirm).should('be.visible')
    });
});

describe('Login fail', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Deve tentar fazer login com nome inválido', () => {
        cy.get(selectorsList.usernameField).type('Tereza')
        cy.get(selectorsList.passwordField).type('s3cret')
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.wrongCredentialsAlert).should('be.visible')
        cy.get(selectorsList.wrongCredentialsAlert).should('contain', 'Username or password is invalid')
    })

    it('Deve tentar fazer login com senha inválida', () => {
        cy.get(selectorsList.usernameField).type('Dina20')
        cy.get(selectorsList.passwordField).type('123456')
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.wrongCredentialsAlert).should('be.visible')
        cy.get(selectorsList.wrongCredentialsAlert).should('contain', 'Username or password is invalid')
    })
})

    
