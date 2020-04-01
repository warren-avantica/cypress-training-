describe('Working with inputs', () => {

  it('should load login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.clearCookies({log: true})
    cy.clearLocalStorage('item name', {log: true})

    cy.title().should('include', 'Zero - Log in')
  })

  it('should fill username', () => {
    cy.get('#user_login').as('username')
    cy.get('@username').clear()
    cy.get('@username').type('kagebushin17')
  })

  it('should fill password', () => {
    cy.get('#user_password').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('user_password')
  })

  it('should mark checkbox', () => {
    cy.get('#user_remember_me').click()
  })

  it('should submit login form', () => {
    cy.contains('Sign in').click()
  })

  it('should display error message', () => {
    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'Login and/or password are wrong.')
  })
})