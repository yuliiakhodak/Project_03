class BookingFunction {

    getRadioButtons() {
        return cy.get(".radio").find("input")
    }
    getBookButtom() {
        return cy.get(".Button_c_button__TmkRS")
    }
    getAllLabels() {
        return cy.get(".label")
    }
    getDropDowns() {
        return cy.get(".select").find("select")
    }
    getAllInputs() {
        return cy.get(".select, .react-datepicker__input-container")
    }
    getReturnDropdown(){
        return cy.get(".react-datepicker-wrapper").parents().next().find("input")
    }
    getOneWayButton(){
        return cy.get(".radio").contains("One way").find("input")
    }
    getRoundWayButton(){
        return cy.get(".radio").contains("Round trip").find("input")
    }
    
    getCabinClassDropdown(){
        return cy.get(".field").contains("Cabin Class").next().find("select")
    }
   
    getFromDropdown(){
        return cy.get(".field").contains("From").next().find("select")
    }
   
    getToDropdown(){
        return cy.get(".field").contains("To").next().find("select")
    }
  
    getDepartDropdown(){
        return cy.get(".field").contains("Depart").next().find("input")
    }
   
    
    getNumberOfPassengersDropdown(){
        return cy.get(".field").contains("Number of passengers").next().find("select")
    }
  
    getPassenger1Dropdown(){
        return cy.get(".field").contains("Passenger 1").next().find("select")
    }
    getDepartMessage(){
        return cy.get("h1").contains("DEPART")
    }
    getNumberOfPassengersMessage(){
        return cy.get(".mt-4>:nth-child(1)")
    }

    getFutureDate(num){
        const today = new Date();
        const futureDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + num).toLocaleDateString("en-US")
        return futureDate
    }
    getformattedDate(num){
    const today = new Date();
    const formattedDate1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + num).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
    const formattedDate2 = formattedDate1.toString().replaceAll(",", "")
    return formattedDate2
    }
   getReturnMessage(){
    return cy.get(".is-underlined").contains("RETURN")
   }
}

export default BookingFunction