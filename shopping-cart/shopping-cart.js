import companiesArr from '../data/companies.js';
//import renderProductLi from '../products/render-product.js';
import findById from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';

const tableBodyElement = document.getElementsByName('tbody')[0];

cart.forEach(lineItem => {
    let matchingCompany = findById(companiesArr, lineItem.id);
    let cartRow = renderTableRow(matchingCompany, lineItem);
    tableBodyElement.appendChild(cartRow);
});