import { Given } from "cypress-cucumber-preprocessor/steps";
import { todoFunct } from "./util";

const url = 'https://google.com'
var todo1;
Given('I open home page', () => {
  cy.visit("/").viewport('iphone-8')
  cy.url().should('include', '8888');
  cy.title().should('include', 'React')
})



When('I submit a todo item called {string}', (todo) => {
  todo1 = todo;
  cy.wrap(todo).as('todo')
  cy.enterTodo(todo);
  cy.get('.todo-list').as('todolist');
  cy.get('@todolist').find('li').should('have.length', 1);

})



Then('todo item should be submitted', () => {

  cy.get('.todo-list li').should((item) => {
    expect(item.eq(0)).to.have.text(todo1);
  }

  );
})


Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})