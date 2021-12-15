

describe('Turing Birthday Calendar on Load', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:3000/')
  })

  it('shows the name of the application at the top of the page', () => {
    cy.get('h1')
      .contains('Birthdays')
  })

  it('shows the form which a user can use to submit their own birthdays', () => {
    cy.get('div[class="birthday-form"]')
      .children('h2')
      .get('input[name="name"]')
      .get('input[name="month"]')
      .get('input[name="day"]')
      .get('input[type="submit"]')
  })

  it('displays a div element for each month', () => {
    
    cy.get('div[id="January"]')
      .contains('January')
      .get('div[id="February"]')
      .contains('February')
      .get('div[id="March"]')
      .contains('March')
      .get('div[id="April"]')
      .contains('April')
  })

  it('should show birthday data for users on page load', () => {
    cy.get('div[id="May"]')
      .contains('Kayla')
      
      .get('div[id="June"]')
      .contains('Dawn')
  })
  
  })
