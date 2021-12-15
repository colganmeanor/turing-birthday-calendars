describe('Turing Birthday Calendar Actions', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:3000/')
  })

  it('shows the form which a user can use to submit their own birthdays', () => {
      cy.get('div[class="birthday-form"]')
          .children('h2')
          .get('input[name="name"]')
          .get('input[name="month"]')
          .get('input[name="day"]')
          .get('input[type="submit"]')
  })

  it('allows the user to type in to the form', () => {
      cy.get('input[name="name"]')
      .type('Colgan')
      .get('input[name="name"]')
      .should("have.value", 'Colgan')
      .get('input[name="month"]')
      .clear()
      .type('4')
      .get('input[name="month"]')
      .should("have.value", '4')
      .get('input[name="day"]')
      .clear()
      .type('9')
      .get('input[name="day"]')
      .should("have.value", '9')
  })

  it('should be able to add a new birthday to the page upon form completion', () => {

      cy.get('input[name="name"]')
        .type('Colgan')
        .get('input[name="month"]')
        .clear()
        .type('4')
        .get('input[name="day"]')
        .clear()
        .type('9')
        .get('input[type="submit"]')
        .click()

        .get('div[id="April"]')
        .contains('Colgan')
  })
})