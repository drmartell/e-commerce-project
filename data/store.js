import { STORE_KEY } from '../shopping-cart/cart-api.js';

// this is a wrapper over local storage that handles localStorage logic
const store = {
    // store.storage gives us direct access to localStorage
    storage: window.localStorage,
    // store.save() is a wrapper over localStorage.setItem
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    // given a key, go get and parse something from localStorage
    getSales(key) {
        const json = store.storage.getItem(key);
        if (!json) return [];
        const item = JSON.parse(json);
        return item;
    },
    placeOrder(shoppingCartArr) {
        let foundLineItem;
        const savedSales = this.getSales(STORE_KEY);
        shoppingCartArr.forEach(lineItem => {
            foundLineItem = savedSales.find(savedLineItem => savedLineItem.id === lineItem.id);
            if (foundLineItem) foundLineItem.quantity += lineItem.quantity;
            else savedSales.push(lineItem);
        });
        return savedSales;
    }
};

export default store;