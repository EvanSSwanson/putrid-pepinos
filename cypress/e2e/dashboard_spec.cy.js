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
  it('Should load 4 movies', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').should('have.length', 4)
    })
  })
  it('Should show the Black Adam card', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').eq(0).should('contain', 'Black Adam')
        .and('contain', '4')
      cy.get('.poster').eq(0).should('be.visible')
      cy.get('.poster').eq(0)
        .should(([img]) => {
            expect(img.alt).contains('Poster of Black Adam')
        })
    })
  })
  it('Should show the The Woman King card', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').eq(1).should('contain', 'The Woman King')
        .and('contain', '4')
      cy.get('.poster').eq(1).should('be.visible')
      cy.get('.poster').eq(1)
        .should(([img]) => {
            expect(img.alt).contains('Poster of The Woman King')
        })
    })
  })
  it('Should show the R.I.P.D. 2: Rise of the Damned card', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').eq(2).should('contain', 'R.I.P.D. 2: Rise of the Damned')
        .and('contain', '7')
      cy.get('.poster').eq(2).should('be.visible')
      cy.get('.poster').eq(2)
        .should(([img]) => {
            expect(img.alt).contains('Poster of R.I.P.D. 2: Rise of the Damned')
        })
    })
  })
  it('Should show the Black Panther: Wakanda Forever card', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.movie-card').eq(3).should('contain', 'Black Panther: Wakanda Forever')
      .and('contain', '4')
      cy.get('.poster').eq(3).should('be.visible')
      cy.get('.poster').eq(3)
        .should(([img]) => {
            expect(img.alt).contains('Poster of Black Panther: Wakanda Forever')
        })
    })
  })
  it("Should show the details of the movie when the movie is clicked on", () => {
    cy.intercept(
      {
        method: "POST",
        url: "http://localhost:3000/movies/724495",
      },
      {
        id: 724495,
        title: "The Woman King",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
        release_date: "2022-09-15",
        overview:
          "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        genres: ["Action", "Drama", "History"],
        budget: 50000000,
        revenue: 91000000,
        runtime: 135,
        tagline: "Her reign begins.",
        average_rating: 4,
      }
    ).get('.movie-card').eq(1).click().url().should('include', '/724495')
  });
})

