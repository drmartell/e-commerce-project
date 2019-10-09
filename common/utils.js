import companiesArr from '../data/companies.js';

export default function makePrettyCurrency(number) {
    return number
        .toLocaleString(
            'en-US',
            { 
                style: 'currency', currency: 'USD' 
            });
}

export function findById(companies, orderId) {
    // for (let company of companies) {
    //     if (company.id === orderId) return company;
    companies.forEach(company =>
        company.id === orderId ? company : null
    );
}
    //return null;
//}

export function calcLineItem(quant, amt) {
    const rawTotal = quant * amt;
    return Math.round(rawTotal * 100) / 100;
}

export function calcOrderTotal(cartArr, prodArr) {
    let orderTotal = 0;
    cartArr.forEach(lineItem => orderTotal += calcLineItem(lineItem.quantity, prodArr.price));
    return Math.round(orderTotal, 2);
}

export function justGiveMeAnObject(someArrOfObj) {
    return someArrOfObj[0];
}


// //Um, why does code in the outermost scope get run in utils.js at all?
// const callJustGiveMeAnObject = justGiveMeAnObject(companiesArr);
// console.log(callJustGiveMeAnObject, typeof callJustGiveMeAnObject);


const testfunc = findById(companiesArr, 'AAPL');
console.log(JSON.stringify(testfunc));
console.log(testfunc);
console.log(typeof testfunc);
