import makePrettyCurrency from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};

export default (fruit, order) => {
    const tableRow = 
    document.createElement('tr');
    
    // const columnOne = makeTd(fruit.name);
    // const columnTwo = makeTd(order.quantity);
    const prettyPrice = fruit.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // const columnThree = makeTd(prettyPrice);
    // const totalPrice = order.quantity * fruit.price;
    const prettyTotal = makePrettyCurrency(totalPrice);
    // const columnFour = makeTd(prettyTotal);

    [fruit.name, order.quantity, prettyPrice, prettyTotal].forEach(column => {
        tableRow.appendChild(makeTd(column));
    });

    // tableRow.appendChild(columnOne);
    // tableRow.appendChild(columnTwo);
    // tableRow.appendChild(columnThree);
    // tableRow.appendChild(columnFour);
    return tableRow;
};
