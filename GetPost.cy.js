///<reference types = "cypress" />

describe("API Automation", () =>{

    it("Post Req", () =>{

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body:{
            
                    "name": "Ali",
                    "job": "leader"
                
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq("Ali")
            expect(res.body.job).to.eq("leader")

        })


    })


    it("GETAPI", () =>{

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2",



        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.total).to.eq(12)
            

        })


    })

    it("PUTrequest", ()=>{

        cy.request({

            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: 
                {
                    "name": "ALI",
                    "job": "EDI"
                }
            



        }).then((ress)=>{

            expect(ress.status).to.eq(200)
            expect(ress.body).to.have.property("updatedAt")

        })

    })

    it("PostReqUnSucc", ()=>{

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/register",
            body: {
                
                    "email": "alibasti@fife.com"
                
            }


        }).then((resss)=>{
            expect(resss.status).to.eq(400)
            expect(resss.body.error).to.include("Missing")

        })

    })
})