describe('Login successful', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Deve fazer login com usuário válido', () => {
        cy.get('#username').type('Dina20')
        cy.get('#password').type('s3cret')
        cy.get('[type="submit"]').click()
        cy.get('.css-1idn90j-MuiGrid-root').should('be.visible')
    });
});

describe('Login fail', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('Deve tentar fazer login com dados inválidos', () => {
        cy.get('#username').type('Tereza')
        cy.get('#password').type('s3cret')
        cy.get('[type="submit"]').click()
        cy.get('[data-test="signin-error"]').should('be.visible')
        cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid')
    })
})

    
