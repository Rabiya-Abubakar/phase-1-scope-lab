// Write your solution in this file!
// Step 1: Declare customerName in global scope
var customerName = 'bob';

// Step 2: Define upperCaseCustomerName function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Step 3: Define setBestCustomer function
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Step 4: Define overwriteBestCustomer function
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Step 5: Define leastFavoriteCustomer and changeLeastFavoriteCustomer function
const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new customer'; // This will throw an error because leastFavoriteCustomer is a constant
}

// Exporting the functions to be tested
module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
};

