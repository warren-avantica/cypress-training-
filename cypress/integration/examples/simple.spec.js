describe('Browser actions', () => {
  
  it('should load books website', () => {
    cy.visit('http://books.toscrape.com/index.html')
      
    cy.url()
      .should('include', 'books.toscrape')
    cy.log('Before reload')
    cy.reload()
    cy.log('After reload')
  })

  it('should click on travel category', () => {
    cy.get('a').contains('Travel').click()
    cy.get('h1').contains('Travel').should('be.visible')
  })

  it('should display correct number of books', () => {
    cy.get('.product_pod').its('length').should('eq', 11)
  })

  it('should click the Poetry category', () => {
    cy.get('a').contains('Poetry').click()
  })

  it('should click the olio book', () => {
    cy.get('a').contains('Olio').click()
  })

  it('should check the book value', () => {
    cy.get('.price_color').contains('23.88')
    cy.get('.price_color').should('include.text', '23.88')
  })
})