import makePrettyCurrency from '../common/utils.js';

const makeTd = content => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};

export default function renderTableRow(company, order) {
    const tableRow = document.createElement('tr');
    const prettyPrice = makePrettyCurrency(company.price);
    const totalPrice = order.quantity * company.price;
    const prettyTotal = makePrettyCurrency(totalPrice);

    [company.name, order.quantity, prettyPrice, prettyTotal].forEach(cell => {
        tableRow.appendChild(makeTd(cell));
    });

    return tableRow;
}
