describe('Select box tests', () => {

  /*
  before(() => {
    runs before all tests inside describe
    setup test data or test context
    seed or reset the database
  })
  */

  /*
  beforeEach(() => {
    runs before each it block in the describe
  })
  */

  it('should load website', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
  })

  it('should select an option from selectbox', () => {

    cy.get('#preferred-interface').select('JavaScript API')
    cy.get('#preferred-interface').should('have.value', 'JavaScript API')
  })

  /*
  after(() => {})
    runs after all tests inside describe block are done
    test clean up
    clean cookies or localstorage
  */
 /*
 afterEach(() => {
   runs after each it block in the describe
 })
 */
})