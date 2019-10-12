import { findById } from '../common/utils.js';
import { setCartAsString, getCartAsArray } from '../shopping-cart/cart-api.js';

export const addToCart = productId => {
    const productDropDown = document.getElementById(productId);
    const quantityToAdd = Number(productDropDown.value);

    let theCartInMemory = getCartAsArray();
    
    const newItemInCart = {
        id: productId,
        quantity: quantityToAdd,
    };

    if (!theCartInMemory) 
        theCartInMemory = ([newItemInCart]);
    else {
        const cartItem = findById(theCartInMemory, productId);
        if (cartItem) cartItem.quantity += quantityToAdd;
        else theCartInMemory.push(newItemInCart);
    } 
    setCartAsString(theCartInMemory);
};
