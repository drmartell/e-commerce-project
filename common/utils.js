import companiesArr from '../data/companies.js';
import cart from '../data/cart.js';

export default function makePrettyCurrency(number) {
    return number
        .toLocaleString(
            'en-US',
            { 
                style: 'currency', currency: 'USD' 
            });
}

export function findById(companies, orderId) {
    for (let company of companies) {
        if (company.id === orderId) return company;
    }
    return null;
}

export function calcLineItem(quant, amt) {
    const rawTotal = quant * amt;
    return Math.round(rawTotal * 100) / 100;
}

export function calcOrderTotal(cartArr, prodArr) {
    let orderTotal = 0;
    cartArr.forEach((lineItem, i) =>
        orderTotal += calcLineItem(lineItem.quantity, prodArr[i].price));
    return Math.round(orderTotal * 100) / 100;
}

export function justGiveMeAnObject(someArrOfObj) {
    return someArrOfObj[0];
}
