import companiesArr from '../data/companies.js';
import makePrettyCurrency, { findById, calcOrderTotal } from '../common/utils.js';
import { retrieveFromStorage, STORE_KEY } from '../shopping-cart/cart-api.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];
const orderTotalCell = document.getElementById('order-total-cell');

const storedTotals = retrieveFromStorage(STORE_KEY);

if (storedTotals !== null) {
    storedTotals.forEach(lineItem => {
        const matchingCompany = findById(companiesArr, lineItem.id);
        if (matchingCompany !== null) {
            let cartRow = renderTableRow(matchingCompany, lineItem);
            tableBodyElement.appendChild(cartRow);
        }
    });

    orderTotalCell.textContent = makePrettyCurrency(calcOrderTotal(storedTotals, companiesArr)); 
}
