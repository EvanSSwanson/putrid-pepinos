describe('Single Movie Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/539885');
      })
    it('Should have a title', () => {
        cy.contains('h1', 'Putrid Pepinos')
        cy.contains('h1', 'Ava')
    })
    it('Should display an Overview', () => {
        cy.get('.movie-details').should('contain', 'Overview')
            .and('contain', 'assassin')
    })
    it('Should display Genres', () => {
        cy.get('.movie-details').should('contain', 'Genres')
            .and('contain', 'Action')
            .and('contain', 'Crime')
            .and('contain', 'Drama')
            .and('contain', 'Thriller')
    })
    it('Should display a Budget', () => {
        cy.get('.movie-details').should('contain', 'Budget')
            .and('contain', '$0')
    })
    it('Should display a Revenue', () => {
        cy.get('.movie-details').should('contain', 'Revenue')
            .and('contain', '$152812')
    })
    it('Should display a Runtime', () => {
        cy.get('.movie-details').should('contain', 'Runtime')
            .and('contain', '96 minutes')
    })
    it('Should display a Tagline', () => {
        cy.get('.movie-details').should('contain', 'Tagline')
            .and('contain', 'Kill. Or be killed.')
    })
    it('Should display a Release Date', () => {
        cy.get('.movie-details').should('contain', 'Release Date')
            .and('contain', '2020-07-02')
    })
    it('Should display a Rating', () => {
        cy.get('.movie-details').should('contain', 'Rating')
            .and('contain', '5.9')
    })
    it('Should display both images ', () => {
        cy.get('.movie-details').within(() => {
            cy.get('.poster').should('be.visible')
            cy.get('.backdrop').should('be.visible')
      })
    })
  })