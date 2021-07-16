const book = {
    title: 'Designing Evolvable Web APIs with ASP.NET',
    ISBN: '9781449337711',
  };
  
  describe('Bookstore Application', () => {
    beforeEach('Login', () => {
    //   cy.authenticate(user);
    });
    
    specify('As a user, I should be able to add a book to my profile', () => {
      cy.intercept('https://www.demoqa.com/BookStore/v1/Books', { fixture: 'books.json' }).as(
        'booksRequest'
      );
      
      cy.visit('https://www.demoqa.com/books');
      cy.wait('@booksRequest');
      
      cy.contains('a', book.title).should('be.visible');
    });
  });