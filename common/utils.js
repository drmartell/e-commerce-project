import companiesArr from "../data/companies.js";

export default function makePrettyCurrency(number) {
    return number
        .toLocaleString(
            'en-US',
            { 
                style: 'currency', currency: 'USD' 
            });
}

export function findById(companies, id) {
    for (let company of companies) {
        if (company.id === id) return company;
    }
    return null;
}

export function calcLineItem(quant, amt) {
    const rawTotal = quant * amt;
    return Math.round(rawTotal * 100) / 100;
}

const testfunc = findById(companiesArr, 'AAPL');
console.log(JSON.stringify(testfunc));
console.log(testfunc);
