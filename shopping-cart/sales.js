const SALES_KEY = 'sales';

const salesExists = () => localStorage.getItem(SALES_KEY);
export const setSales = (salesArr) => localStorage.setItem(SALES_KEY, JSON.stringify(salesArr));
export const getCart = () => JSON.parse(localStorage.getItem(SALES_KEY));

export function placeOrder() {
    if (!salesExists) 
    
    if (sales === null) sales = getCartAsArray();
    else {

    }
}