import makePrettyCurrency from '../common/utils.js';

const makeTd = content => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};

export default function renderTableRow(company, order) {
    const tableRow = document.createElement('tr');
    
    // const columnOne = makeTd(fruit.name);
    // const columnTwo = makeTd(order.quantity);
    const prettyPrice = makePrettyCurrency(company.price);
    // const columnThree = makeTd(prettyPrice);
    const totalPrice = order.quantity * company.price;
    const prettyTotal = makePrettyCurrency(totalPrice);
    // const columnFour = makeTd(prettyTotal);

    [company.name, order.quantity, prettyPrice, prettyTotal].forEach(cell => {
        tableRow.appendChild(makeTd(cell));
    });

    // tableRow.appendChild(columnOne);
    // tableRow.appendChild(columnTwo);
    // tableRow.appendChild(columnThree);
    // tableRow.appendChild(columnFour);
    return tableRow;
}
