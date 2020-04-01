describe('Feedback form', () => {

  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#feedback').click()
  })

  it('should verify form loaded', () => {
    cy.get('form').should('be.visible')
  })

  it('should fill the form', () => {
    cy.get('#name').type('aasdasd')
    cy.get('#email').type('asd@asd.com')
    cy.get('#subject').type('aasdasd')
    cy.get('#comment').type('asdasdasdasdasdasdasd')
  })

  it('should submit the form', () => {
    cy.contains('Send Message').click()
  })

  it('should display feedback message', () => {
    cy.contains('Thank you for your comments').should('be.visible')
  })
})