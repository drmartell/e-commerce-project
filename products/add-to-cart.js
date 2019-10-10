import { findById, setCartAsString, getCartAsArray } from '../common/utils.js';

export const addToCart = productId => {
    let theCartInMemory = getCartAsArray();
    
    const oneOfThisItem = {
        id: productId,
        quantity: 1,
    };

    // if empty cart, add one of this item
    if (!theCartInMemory) {
        //update the cart held in memory
        theCartInMemory = ([oneOfThisItem]);
    }
    // if the cart has contents...
    else {
        const cartItem = findById(theCartInMemory, productId);
        // if this item is in the cart, increase quantity
        if (cartItem) {
            cartItem.quantity += 1;
        }
        // if this item is not in the cart, add it
        else {
            theCartInMemory.push(oneOfThisItem);
        }
    } 
    // now, write the memory to file
    setCartAsString(theCartInMemory);
};
