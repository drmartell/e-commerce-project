import companiesArr from '../data/companies.js';
import makePrettyCurrency, { findById, calcOrderTotal } from '../common/utils.js';
import { getCartAsArray, clearCart } from '../shopping-cart/cart-api.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order');

const theCartInMemory = getCartAsArray();

placeOrderButton.disabled = true;

placeOrderButton.addEventListener('click', () => {
    alert(JSON.stringify(theCartInMemory, true, 2));
    clearCart();
    window.location.assign('../src/index.html');
    
});

if (theCartInMemory !== null) {
    placeOrderButton.disabled = false;

    theCartInMemory.forEach(lineItem => {
        const matchingCompany = findById(companiesArr, lineItem.id);
        if (matchingCompany !== null) {
            let cartRow = renderTableRow(matchingCompany, lineItem);
            tableBodyElement.appendChild(cartRow);
        }
    });

    orderTotalCell.textContent = makePrettyCurrency(calcOrderTotal(theCartInMemory, companiesArr));
}
