import { findById } from '../common/utils.js';
import cart from '../data/cart.js';

const CART_KEY = 'cart';

// NOT SURE ABOUT THIS PART, I NEED TO MAKE SURE NOT TO INVOKE THE FUNCTION DURING CONSTRUCTION OF THE EVENT LISTENER
export const addToCart = (addToCartButton) => {
    // store the id to a local variable
    const productId = addToCartButton.value;

    // Retrieve the existing shopping cart from localStorage
    let shoppingCart = localStorage.getItem(CART_KEY);

    // If there is no cart in data in localStorage, use an empty array: []
    !shoppingCart && (shoppingCart = JSON.stringify([]));

    // If there is cart data in localStorage, turn into array using JSON.parse
    const shoppingCartArray = JSON.parse(shoppingCart);
    console.log(shoppingCartArray);

    // Check if the shopping cart already has the line item for this product. You can reuse your findById function for this task.
    let cartItem = findById(shoppingCartArray, productId);

    // If it does exist, increment the quantity.
    if (cartItem) cartItem.quantity += 1;
    
    // If it does not exist create a new line item with the following format:
    else {
        const lineItem = {
            id: productId,
            quantity: 1
        };
        cart.push(lineItem);
    }
    // Save the modified cart array back to localStorage, remembering to serialize with JSON.stringify before saving
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    console.log(JSON.stringify(cart));
};