/// <reference types="cypress" />

it("Should be able to add a new todo task", ()=> {

cy.visit("http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000")

cy.get('.new-todo', {timeout:6000}).type("Go to the Barber{enter}")


cy.get('label').should("have.text", "Go to the Barber")
cy.get('.toggle').should("not.be.checked")

cy.get('.toggle').click()
cy.get('.toggle').should('be.checked')

cy.contains('Clear').click()
cy.get('.new-todo').type("Clean Room{enter}")
cy.get('.new-todo').type("Go to Gym{enter}")
cy.get('.todo-list').should('have.descendants', 'li')
})