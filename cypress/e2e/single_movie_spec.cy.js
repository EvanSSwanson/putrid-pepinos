describe('Single Movie Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/436270');
      })
    it('Should have a title', () => {
        cy.contains('h1', 'Putrid Pepinos')
        cy.contains('h1', 'Black Adam')
    })
    it('Should display an Overview', () => {
        cy.get('.overview').should('contain', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    })
    it('Should display Genres', () => {
        cy.get('.movie-details').should('contain', 'Genres')
            .and('contain', 'Action')
            .and('contain', 'Fantasy')
            .and('contain', 'Science Fiction')
    })
    it('Should display a Budget', () => {
        cy.get('.movie-details').should('contain', 'Budget')
            .and('contain', '$200000000')
    })
    it('Should display a Revenue', () => {
        cy.get('.movie-details').should('contain', 'Revenue')
            .and('contain', '$384571691')
    })
    it('Should display a Runtime', () => {
        cy.get('.movie-details').should('contain', 'Runtime')
            .and('contain', '125 minutes')
    })
    it('Should display a Tagline', () => {
        cy.get('.left-container').should('contain', 'The world needed a hero. It got Black Adam.')
    })
    it('Should display a Release Date', () => {
        cy.get('.movie-details').should('contain', 'Release Date')
            .and('contain', '2022-10-19')
    })
    it('Should display a Rating', () => {
        cy.get('.movie-details').should('contain', 'Rating')
            .and('contain', '4')
    })
    it('Should display the poster image ', () => {
        cy.get('.movie-details').within(() => {
            cy.get('.single-poster').should('be.visible')
      })
    })
    it('Should display the alt image if the poster is missing', () => {
        cy.get('.single-poster')
        .should(([img]) => {
            expect(img.alt).contains('Image for Black Adam')
        })
    })
  })