import companiesArr from '../data/companies.js';
import makePrettyCurrency, { findById, calcOrderTotal, getCartAsArray, emptyCart } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
//import cart from '../data/cart.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order');

placeOrderButton.disabled = true;
placeOrderButton.addEventListener('click', () => {
    alert(JSON.stringify(getCartAsArray(), true, 2));
    emptyCart();
    window.location.assign('../src/index.html');
});

if (getCartAsArray() !== null) {
    placeOrderButton.disabled = false;
    getCartAsArray().forEach(lineItem => {
        const matchingCompany = findById(companiesArr, lineItem.id);
        if (matchingCompany !== null) {
            let cartRow = renderTableRow(matchingCompany, lineItem);
            tableBodyElement.appendChild(cartRow);
        }
    });
    orderTotalCell.textContent = makePrettyCurrency(calcOrderTotal(getCartAsArray(), companiesArr));
}


// If there are no line items in the cart, disable the "Place Order" button.
// Add an event handler to the "Place Order" button that:
// Displays an alert with the contents of the cart (hint: JSON.stringify(cart, true, 2) will give you nicely formatted JSON)
// Remove the cart from localStorage (.removeItem)
// Redirect the user back to the home page