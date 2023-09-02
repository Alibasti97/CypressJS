/// <reference types="cypress" />

describe("1st Module", ()=>{
beforeEach(()=>{
    cy.visit("http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000")

    cy.get('.new-todo', {timeout:6000}).type("Go to the Barber{enter}")
    cy.get('.new-todo').type("Clean Room{enter}")
    cy.get('.new-todo').type("Go to Gym{enter}")
})

it("should verify todo's in the list", ()=>{
cy.get('label').contains('Go to Gym')
cy.get('.toggle').should('not.be.checked')

})

it("Should mark todo as completed", ()=>{
cy.get(".toggle").click({multiple:true})

})

it("Filtering completed", ()=>{
    cy.get(':nth-child(2) > a').click()
    cy.get(".toggle").click({multiple:true})
    cy.get(':nth-child(3) > a').click()
})


})