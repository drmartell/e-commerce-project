import companiesArr from '../data/companies.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';
//import calcOrderTotal from '../common/utils.js';

import justGiveMeAnObject from '../common/utils.js';

const tableBodyElement = document.getElementsByTagName('tbody')[0];

cart.forEach((lineItem, i) => {
    console.log(i);
    //console.log(companiesArr); //CHECK
    //console.log(lineItem.id); //CHECK
    const matchingCompany = findById(companiesArr, lineItem.id);
    if (matchingCompany !== null) {
        console.log(typeof matchingCompany);
        let cartRow = renderTableRow(matchingCompany, lineItem);
        tableBodyElement.appendChild(cartRow);
    }
});

const orderTotalCell = document.getElementById('order-total-cell');
orderTotalCell.textContent = calcOrderTotal(cart, companiesArr);

console.log(justGiveMeAnObject(companiesArr), typeof justGiveMeAnObject(companiesArr));

console.log(findById);