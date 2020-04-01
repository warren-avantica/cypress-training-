describe('Interacting with xpaths', () => {

  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })
 
  it('should click an element using xpath', () => {
    cy.xpath('//button[@id="signin_button"]').should('be.visible')
  }) 
})