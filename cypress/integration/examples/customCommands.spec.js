describe('Custom commands', () => {

  it('should login with custom command', () => {

    cy.visit('http://zero.webappsecurity.com/login.html')

    cy.login('username', 'password')
  })
})