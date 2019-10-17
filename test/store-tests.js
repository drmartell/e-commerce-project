import store from '../data/store.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save', (assert) => {
    // arrange
    const key = 'cat';
    const cat = { name: 'felix' };
    
    // act
    store.save(key, cat);
    const got = store.getSales(key);

    // assert
    assert.deepEqual(got, cat);
});

test('placeOrder should add new product to array', (assert) => {
    // arrange
    const newProduct = [{
        id: 'NEW-PRODUCT',
        quantity: 999,
    }];

    const cartArrWithNewProduct = [newProduct];

    // act
    const updatedCart = store.placeOrder(cartArrWithNewProduct);
    const foundProduct = updatedCart.find(product => product.id === newProduct.id);
    
    // assert
    assert.deepEqual(foundProduct, newProduct);
});
