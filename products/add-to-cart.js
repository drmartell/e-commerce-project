import { findById } from '../common/utils.js';
import { setCartAsString, getCartAsArray } from '../shopping-cart/cart-api.js';

export const addToCart = productId => {
    const productDropDown = document.getElementById(productId);
    const quantityToAdd = productDropDown.value;

    let theCartInMemory = getCartAsArray();
    
    const theFirstOfThisItem = {
        id: productId,
        quantity: quantityToAdd,
    };

    // if empty cart, add one of this item
    if (!theCartInMemory) {
        //update the cart held in memory
        theCartInMemory = ([theFirstOfThisItem]);
    }
    // if the cart has contents...
    else {
        const cartItem = findById(theCartInMemory, productId);
        // if this item is in the cart, increase quantity
        if (cartItem) {
            cartItem.quantity += quantityToAdd;
        }
        // if this item is not in the cart, add it
        else {
            theCartInMemory.push(theFirstOfThisItem);
        }
    } 
    // now, write the memory to file
    setCartAsString(theCartInMemory);
};
