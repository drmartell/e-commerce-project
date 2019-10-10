export default function makePrettyCurrency(number) {
    return number
        .toLocaleString(
            'en-US',
            { 
                style: 'currency', currency: 'USD' 
            });
}

export function findById(matchArr, Id) {
    for (let item of matchArr) {
        if (item.id === Id) return item;
    }
    return null;
}

export function calcLineItem(quant, amt) {
    const rawTotal = quant * amt;
    return Math.round(rawTotal * 100) / 100;
}

export function calcOrderTotal(cartArr, prodArr) {
    let orderTotal = 0;
    cartArr.forEach(lineItem => {
        prodArr.forEach(product => {
            if (lineItem.id === product.id)
                orderTotal += calcLineItem(lineItem.quantity, product.price);
        });
    });
    return Math.round(orderTotal * 100) / 100;
}
