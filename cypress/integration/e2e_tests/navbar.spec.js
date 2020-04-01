describe('Forgot password', () => {

  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should display online banking content', () => {
    cy.get('#onlineBankingMenu').click()
    cy.contains('Online Banking').should('be.visible')
  })

  it('should feedback content', () => {
    cy.get('#feedback').click()
    cy.contains('Feedback').should('be.visible')
  })

  it('should display home page content', () => {
    cy.contains('Zero Bank').click()
    cy.contains('Welcome to Zero Online Banking').should('be.visible')
  })
})