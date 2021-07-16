export const todoFunct = (todo) =>{
    cy.get(".new-todo").type(todo + "{enter}")
}