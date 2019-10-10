import companiesArr from '../data/companies.js';
import makePrettyCurrency, { findById, calcOrderTotal, getCartAsArray, emptyCart } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order');

const theCartInMemory = getCartAsArray();

// set button disabled by default
placeOrderButton.disabled = true;

placeOrderButton.addEventListener('click', () => {
    alert(JSON.stringify(theCartInMemory, true, 2));
    emptyCart();
    window.location.assign('../src/index.html');
});

if (theCartInMemory !== null) {
    // enable the button if there are items in the cart
    placeOrderButton.disabled = false;

    theCartInMemory.forEach(lineItem => {
        const matchingCompany = findById(companiesArr, lineItem.id);
        if (matchingCompany !== null) {
            let cartRow = renderTableRow(matchingCompany, lineItem);
            tableBodyElement.appendChild(cartRow);
        }
    });
    console.log(theCartInMemory);
    console.log(calcOrderTotal(theCartInMemory, companiesArr));

    orderTotalCell.textContent = makePrettyCurrency(calcOrderTotal(theCartInMemory, companiesArr));
}

// If there are no line items in the cart, disable the "Place Order" button.
// Add an event handler to the "Place Order" button that:
// Displays an alert with the contents of the cart (hint: JSON.stringify(cart, true, 2) will give you nicely formatted JSON)
// Remove the cart from localStorage (.removeItem)
// Redirect the user back to the home page