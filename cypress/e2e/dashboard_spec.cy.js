describe('Homepage Test', () => {
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
      cy.get('.poster').eq(0).should('be.visible')
      cy.get('.movie-card').eq(1).should('contain', 'Mulan')
        .and('contain', '4.9')
      cy.get('.poster').eq(1).should('be.visible')
      cy.get('.movie-card').eq(2).should('contain', 'Rogue')
        .and('contain', '5.4')
      cy.get('.poster').eq(2).should('be.visible')
      cy.get('.movie-card').eq(3).should('contain', 'Ava')
        .and('contain', '5.1')
      cy.get('.poster').eq(3).should('be.visible')
    })
  })
  it("Should show the details of the movie when the movie is clicked on", () => {
    cy.intercept(
      {
        method: "POST",
        url: "http://localhost:3000/movies/337401",
      },
      {
        id: 337401,
        title: "Mulan",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        release_date: "2020-09-04",
        overview:
          "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        budget: 200000000,
        revenue: 57000000,
        runtime: 115,
        tagline: "",
        average_rating: 5.1,
      }
    ).get('.movie-card').eq(1).click().url().should('include', '/337401')
  });
})

