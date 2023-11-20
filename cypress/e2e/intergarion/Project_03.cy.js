/// <reference types="cypress" />
import BookingFunction from "../../pages/BookingFunction.js"
const bookingFunction = new BookingFunction

describe("Project - Booking Function", () => {

    beforeEach(() => {
        cy.visit("https://techglobal-training.com/frontend/project-3")
        cy.fixture('example').then(function (data) {
            this.NumberOfPassengersDefault = data.NumberOfPassengersDefault,
            this.Passender1Default = data.Passender1Default,
            this.TestCase3 = data.TestCase3
            this.TestCase4 = data.TestCase4
            this.TestCase5 = data.TestCase5
        })
    })

    function ValidateAll(OneWaySelected = true) {
        bookingFunction.getAllLabels().each(function ($el, index) {
            cy.wrap($el).should("be.visible").next().should("be.visible")
            if (index === 6) cy.wrap($el).parent().find('option').should('have.value', this.NumberOfPassengersDefault)
            if (index === 7) cy.wrap($el).next().find('option').should('have.value', this.Passender1Default)
        })
        bookingFunction.getBookButtom().should("be.enabled")
        if (OneWaySelected) {
            bookingFunction.getReturnDropdown().should('have.attr', 'disabled')
        } else {
            bookingFunction.getReturnDropdown().should('have.not.attr', 'disabled')
        }
    }
    
    it("Test Case 01 - Validate the default Book your trip form", () => {

        bookingFunction.getOneWayButton().should("be.visible").and("be.checked")
        bookingFunction.getRoundWayButton().should("be.visible").and("be.not.checked")

        ValidateAll();
    })

    it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {

        bookingFunction.getRoundWayButton().check().should("be.checked")
        bookingFunction.getOneWayButton().should("be.not.checked")

        ValidateAll(false)
    })


    it("Test Case 03 - Validate the booking for 1 passenger and one way", function ()  {
        bookingFunction.getOneWayButton().check()

        bookingFunction.getDropDowns().each(function ($el, index)  {
            cy.wrap($el).select(this.TestCase3[index])
        })
        const Date = bookingFunction.getFutureDate(this.TestCase3[5])
        const FormattedDate = bookingFunction.getformattedDate(this.TestCase3[5])

        bookingFunction.getDepartDropdown().clear().type(Date + "{enter}")
        bookingFunction.getBookButtom().click()

        bookingFunction.getDepartMessage().should("have.text", "DEPART")
        .next().should("have.text", `${this.TestCase3[1]} to ${this.TestCase3[2]}`)
        .next().should("have.text", FormattedDate)
        
        bookingFunction.getNumberOfPassengersDropdown()

        bookingFunction.getNumberOfPassengersMessage().should("have.text", `Number of Passengers: ${this.TestCase3[3]}`)
        .next().should("have.text", `Passenger 1: ${this.TestCase3[4]}`)
        .next().should("have.text", `Cabin class: ${this.TestCase3[0]}`) 

    })


    it("Test Case 04 - Validate the booking for 1 passenger and round trip", function ()  {
        bookingFunction.getRoundWayButton().check()
       // const TestCase4 = ["First", "California", "Illinois", "1", "Adult (16-64)", 7,31]
        bookingFunction.getDropDowns().each(function ($el, index)  {
            cy.wrap($el).select(this.TestCase4[index])
        })
        const Date = bookingFunction.getFutureDate(this.TestCase4[5])
        const MouthDate = bookingFunction.getFutureDate(this.TestCase4[6])
        const MessageDate = bookingFunction.getformattedDate(this.TestCase4[5])
        const MessageDateReturn = bookingFunction.getformattedDate(this.TestCase4[6])

        bookingFunction.getDepartDropdown().clear().type(Date + "{enter}")
        bookingFunction.getReturnDropdown().clear().type(MouthDate + "{enter}")
        bookingFunction.getBookButtom().click()
 
       bookingFunction.getDepartMessage().should("have.text", "DEPART")
       .next().should("have.text", `${this.TestCase4[1]} to ${this.TestCase4[2]}`)
       .next().should("have.text", MessageDate)

       bookingFunction.getNumberOfPassengersMessage().should("have.text", `Number of Passengers: ${this.TestCase4[3]}`)
       .next().should("have.text", `Passenger 1: ${this.TestCase4[4]}`)
       .next().should("have.text", `Cabin class: ${this.TestCase4[0]}`) 
       bookingFunction.getReturnMessage().should("have.text", "RETURN")
       .next().should("have.text", `${this.TestCase4[2]} to ${this.TestCase4[1]}`)
       .next().should("have.text", MessageDateReturn)
    })

    it("Test Case 05 - Validate the booking for 2 passengers and one way", function(){
        bookingFunction.getOneWayButton()
        bookingFunction.getNumberOfPassengersDropdown().select(this.TestCase5[3])
        
        bookingFunction.getDropDowns().each(function ($el, index)  {
            cy.wrap($el).select(this.TestCase5[index])
        })
        const Date = bookingFunction.getFutureDate(this.TestCase5[6])
        const MessageDate = bookingFunction.getformattedDate(this.TestCase5[6])
        const FormattedDate = bookingFunction.getformattedDate()
        bookingFunction.getDepartDropdown().clear().type(Date + "{enter}")
        bookingFunction.getBookButtom().click()

        bookingFunction.getDepartMessage().should("have.text", "DEPART")
        .next().should("have.text", `${this.TestCase5[1]} to ${this.TestCase5[2]}`)
        .next().should("have.text", MessageDate)
        bookingFunction.getNumberOfPassengersMessage().should("have.text", `Number of Passengers: ${this.TestCase5[3]}`)
        .next().should("have.text", `Passenger 1: ${this.TestCase5[4]}`)
        .next().should("have.text", `Passenger 2: ${this.TestCase5[5]}`)
        .next().should("have.text", `Cabin class: ${this.TestCase5[0]}`) 
 
    })

}) 
