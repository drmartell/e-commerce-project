const CART_KEY = 'cart';

export const cartExists = () => localStorage.getItem(CART_KEY);
export const setCartAsString = (cartArr) => localStorage.setItem(CART_KEY, JSON.stringify(cartArr));
export const getCartAsArray = () => JSON.parse(localStorage.getItem(CART_KEY));
export const clearCart = () => localStorage.removeItem(CART_KEY);
