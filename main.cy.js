/// <reference types = "cypress" />


describe("TryTestingThis", function(){

    it("1. open_URL", function(){
        cy.visit("https://trytestingthis.netlify.app/")
        
    })

     it("2. Alert Boxes", function(){
         cy.xpath("/html/body/div[3]/div[1]/div[1]/button").click()
     })
    
   it("3. Enter First Name", function(){
       cy.get("#fname").type("Ali Hassan")
    })

   it("4. last Name", function(){
   cy.get("#lname").type("Basti")
   }) 

   it("5. selecting gender", function(){
    cy.xpath("//*[@id='male']").click().wait(500)
    cy.xpath("//*[@id='female']").click().wait(500)
    cy.xpath("//*[@id='other']").click().wait(500)
    cy.xpath("//*[@id='male']").click().wait(500)
   })

   it("6. selecting options dropdown", function(){
    cy.get("#option").select("option 2").should('have.value', "option 2").and('not.have.value', "option 1")
   })

   it("7. Applicable Options", function(){
    cy.get("#owc").select("option 3")
   })

   it("8. Checking Check boxes", function(){
    cy.get("#moption").check()
    cy.wait(2000)
   })

   it("9. drop down selection", function(){
    cy.xpath("/html/body/div[3]/div[2]/form/fieldset/input[9]").type('banana')
    cy.wait(2000)
   })

   it("10. selecting date", function(){
    cy.get('#day')
    .type('2023-03-23')
    .trigger('keydown', {
      key: 'Enter',
      
    })

   })

   // Changing color from color picker.
   
   it("11. color pallete", function(){

      cy.get('#favcolor')
      .invoke('val', '#EB0F2D')
       .trigger('change')
 })

 it("12. Automating Slider",function(){
    
        cy.xpath('//*[@id="a"]')
          .invoke("val", 33)
          .trigger("change")
          .click()
     })

     it("13. Adding-document-1", function(){
        cy.get('#myfile').click({ multiple: true })
        const fileupload = "sample.pdf"
        cy.get("#myfile").attachFile(fileupload, {subjectType: "drag-n-drop"})
        cy.wait(1000) 
    })

    it("14. setting count", function(){

        cy.get('#quantity').type('{shift}{uparrow}').type('{shift}{uparrow}').type('{shift}{downarrow}')
        cy.wait(2000)
    })
    
    it("15. text area", function(){
        
        cy.get('textarea').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida felis ac nunc ornare accumsan. Donec ante quam, luctus sed nisi quis, consectetur iaculis orci.")
        cy.wait(2000)
    })

    it("16. double click a button", function(){
        cy.xpath('/html/body/div[3]/div[1]/button').dblclick()
        cy.wait(2000)
    })
    
    // Drag and Drop Pizza in a Box

    const dataTransfer = new DataTransfer();
    it("17. drag&dropPizza", function(){
       cy.get('#drag1').trigger('dragstart',{
        dataTransfer
       }) 
       cy.get('#div1').trigger('drop',{
        dataTransfer
       })
    })
    



    // it("18. Click Submit", function(){
    //     cy.xpath("/html/body/div[3]/div[2]/form/fieldset/button").click()
    // })


    })

