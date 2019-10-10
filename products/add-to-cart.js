import { findById, cartExists, setCartAsString, getCartAsArray } from '../common/utils.js';
//import cart from '../data/cart.js';

// NOT SURE ABOUT THIS PART, I NEED TO MAKE SURE NOT TO INVOKE THE FUNCTION DURING CONSTRUCTION OF THE EVENT LISTENER
export const addToCart = productId => {
    const oneOfThisItem = {
        id: productId,
        quantity: 1,
    };
    
    // if empty cart, add one of this item
    if (!cartExists()) {
        console.log('cart now exists with this one item');
        setCartAsString([oneOfThisItem]);
        return;
    }

    // if this is in the cart, increase quantity
    const cartItem = findById(getCartAsArray(), productId);
    console.log('TCL: cartItem', cartItem);
    
    if (cartItem) {
        console.log('yes, a cart item: ' + cartItem.id + ', of quantity: ' + cartItem.quantity);
        cartItem.quantity += 1;
        console.log('quantity is now: ' + cartItem.quantity);
        return;
    } 
    // if this is not in the cart, add it
    else {
        console.log('adding new item to cart');
        const theCart = getCartAsArray();
        console.log('updatedCart: ' + theCart + 'which is an: ' + typeof theCart);
        theCart.push(oneOfThisItem);
        setCartAsString(theCart);
        console.log('updatedCart: ' + theCart);
    }
    console.log(getCartAsArray());
};
