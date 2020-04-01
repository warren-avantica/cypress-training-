describe('Keyboard press simulation', () => {

  it('should submit searchbox with pressing enter', () => {

    cy.visit('http://zero.webappsecurity.com/')

    cy.get('#searchTerm').type('adasdasd {enter}') //pass the name of the key for the trick

  })
})