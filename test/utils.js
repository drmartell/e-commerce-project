import companiesArr from '../data/companies.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import cart from '../data/cart.js';

const test = QUnit.test;

test('findById should return company with id that matches one passed in', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'AAPL';
    const expected = 'AAPL';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundCompany = findById(companiesArr, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundCompany.id, expected);
});

test('calculate line total', assert => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act 
    const total = calcLineItem(quantity, price);

    // assert
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    // arrange
    const expected = 49146.5;

    // act
    const orderTotal = calcOrderTotal(cart, companiesArr);

    // assert
    assert.equal(orderTotal, expected);
});
