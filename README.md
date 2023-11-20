# Project - Booking Function

This project contains Cypress test cases for the Booking Function on a travel website.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
2. Navigate to the project folder:

bash
Copy code
cd <project-folder>

3. Install dependencies:

bash
Copy code
npm install

## Running Tests

To run the Cypress tests, use the following command:

bash
Copy code
npm test
This command will open the Cypress Test Runner, allowing you to run individual test cases or the entire test suite.

## Configuration
The project is configured to run tests in the default Electron browser. You can customize the configuration in the cypress.json file.

## Test Cases
Test Case 01 - Validate the default Book your trip form
This test case checks the default state of the Book your trip form, ensuring that the "One way" radio button is selected and other elements are displayed correctly.

Test Case 02 - Validate the Book your trip form when Round trip is selected
This test case checks the form when the "Round trip" radio button is selected, ensuring that elements are displayed correctly for a round trip.

Test Case 03 - Validate the booking for 1 passenger and one way
This test case performs a booking for 1 passenger for a one-way trip and validates the displayed information.

Test Case 04 - Validate the booking for 1 passenger and round trip
This test case performs a booking for 1 passenger for a round trip and validates the displayed information.

Test Case 05 - Validate the booking for 2 passengers and one way
This test case performs a booking for 2 passengers for a one-way trip and validates the displayed information.

Folder Structure
cypress: Contains Cypress test files and configuration.
fixtures: Contains test data in JSON format.
pages: Contains page objects, such as BookingFunction.js.
