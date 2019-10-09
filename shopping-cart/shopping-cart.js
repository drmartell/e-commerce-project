import companiesArr from '../data/companies.js';
import makePrettyCurrency, { findById, calcOrderTotal } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];

cart.forEach((lineItem, i) => {
    const matchingCompany = findById(companiesArr, lineItem.id);
    if (matchingCompany !== null) {
        let cartRow = renderTableRow(matchingCompany, lineItem);
        tableBodyElement.appendChild(cartRow);
    }
});

const orderTotalCell = document.getElementById('order-total-cell');
orderTotalCell.textContent = makePrettyCurrency(calcOrderTotal(cart, companiesArr));
