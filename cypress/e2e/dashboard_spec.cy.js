describe('My First Test', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: 'GET',
      fixture: '../fixtures/movies.json'
    });
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.contains('h1', 'Putrid Pepinos')
  })
  it('Show all the available movies', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').should('have.length', 4)
      cy.get('.movie-card').eq(0).should('contain', 'Money Plane')
        .and('contain', '6.7')
        .and('contain', 'movies.poster_path')
    })
  })
})

