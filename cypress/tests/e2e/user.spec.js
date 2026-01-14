describe('Register an account', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Registrar novo usuário com sucesso', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Ferraz')
        cy.get('#username').type('Carol')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('s3cret')
        cy.get('[data-test="signup-submit"]').click()
        cy.url().should('include', 'http://localhost:3000/signin')
    })

    it('Registrar novo usuário sem First Name', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').click()
        cy.get('#lastName').type('Ferraz')
        cy.get('#username').type('Carol')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('s3cret')
        cy.get('#firstName-helper-text').should('be.visible')
        cy.get('#firstName-helper-text').contains('First Name is required')
    })

    it('Registrar novo usuário sem Last Name', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').click()
        cy.get('#username').type('Carol')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('s3cret')
        cy.get('#lastName-helper-text').should('be.visible')
        cy.get('#lastName-helper-text').contains('Last Name is required')
    })

    it('Registrar novo usuário sem Username', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Ferraz')
        cy.get('#username').click()
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('s3cret')
        cy.get('#username-helper-text').should('be.visible')
        cy.get('#username-helper-text').contains('Username is required')
    })

    it('Registrar novo usuário sem Password', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Ferraz')
        cy.get('#username').type('Carol')
        cy.get('#password').click()
        cy.get('#confirmPassword').type('s3cret')
        cy.get('#password-helper-text').should('be.visible')
        cy.get('#password-helper-text').contains('Enter your password')
        cy.get('#confirmPassword-helper-text').should('be.visible')
        cy.get('#confirmPassword-helper-text').contains('Password does not match')
    })

    it('Registrar novo usuário sem confirmação do Password', () => {
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Ferraz')
        cy.get('#username').type('Carol')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').click()
        cy.get('.App-root').click()
        cy.get('#confirmPassword-helper-text').should('be.visible')
        cy.get('#confirmPassword-helper-text').contains('Confirm your password')
    })
});


