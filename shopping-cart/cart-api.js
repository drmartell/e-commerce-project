export const CART_KEY = 'cart';
export const STORE_KEY = 'SALES';

export const cartExists = () => localStorage.getItem(CART_KEY);
export const setCartAsString = (cartArr) => localStorage.setItem(CART_KEY, JSON.stringify(cartArr));
export const retrieveFromStorage = (dataKey) => JSON.parse(localStorage.getItem(dataKey));
export const clearCart = () => localStorage.removeItem(CART_KEY);
