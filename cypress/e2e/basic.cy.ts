describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it("should contain corrent information", () => {
    cy.contains('咨询')
  })
}) 