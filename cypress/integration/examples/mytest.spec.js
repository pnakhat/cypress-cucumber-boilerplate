describe('A new test', () => {
    it('should do sonething', () => {
       cy.visit("/").get(".new-todo").type("ddd{enter}")
       cy.get('.todo-list').contains("ddd").should((item) => {
           expect(item).to.have.text('ddd')
           expect(item).to.have.length(1)
       })
    });
});