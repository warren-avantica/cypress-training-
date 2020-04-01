describe('Forgot password', () => {

  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should click on the sign in button', () => {
    cy.get('#signin_button').click()
  })

  it('should click on the forgotten password', () => {
    cy.get('a').contains('Forgot your password ?').click()
  })

  it('should fill email form', () => {
    cy.get('#user_email').type('asda@asd.com')
  })

  it('should submit the form', () => {
    cy.contains('Send Password').click()
  })

  it('should confirm email was sent', () => {
    cy.contains('Your password will be sent').should('be.visible')
  })
})