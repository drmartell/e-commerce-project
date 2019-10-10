const CART_KEY = 'cart';

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
    cartArr.forEach((lineItem, i) => {
        // if (cartArr.id === prodArr[i].id) 
        prodArr.forEach(product => {
            if (lineItem.id === product.id)
                orderTotal += calcLineItem(lineItem.quantity, product.price);
        });
    });
    return Math.round(orderTotal * 100) / 100;
}

// export function calcOrderTotal(cartArr, prodArr) {
//     let orderTotal = 0;
//     cartArr.forEach((lineItem, i) => {
//         // if (cartArr.id === prodArr[i].id) 
//         prodArr.forEach(product => {
//             if (lineItem.id === product.id)
//                 orderTotal += calcLineItem(lineItem.quantity, prodArr[i].price);
//         });
//     });
//     return Math.round(orderTotal * 100) / 100;
// }

export function justGiveMeAnObject(someArrOfObj) {
    return someArrOfObj[0];
}

export const cartExists = () => localStorage.getItem(CART_KEY);
export const setCartAsString = (cartArr) => localStorage.setItem(CART_KEY, JSON.stringify(cartArr));
export const getCartAsArray = () => JSON.parse(localStorage.getItem(CART_KEY));
export const emptyCart = () => localStorage.removeItem(CART_KEY);
