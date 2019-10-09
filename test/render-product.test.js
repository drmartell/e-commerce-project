import companiesArr from '../data/companies.js';
import renderProductLi from '../products/render-product.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';

const test = QUnit.test;

test('generated HTML should match hard coded HTML', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
    const domHTML = '<span id="item-name">Apple</span><div id="image-div"><img src="https://logo.clearbit.com/apple.com" alt="AAPL"></div><div id="description-div">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</div><div id="category-div">Consumer Electronics</div><div id="price-div">$227.06<span> per share</span></div><div id="button-div"><button value="AAPL">Add</button></div>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderProductLi(companiesArr[2]);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, domHTML);
});

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

test('render function should return HTML that matches expected', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
    const expected = '<tr><td>Apple</td><td>50</td><td>$227.06</td><td>$11,353.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderTableRow(companiesArr[2], cart[2]);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.outerHTML, expected);
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

test('renders a table row', assert => {
    // arrange
    const lineItem = {
        id: 'AAPL',
        quantity: 50
    };
    const AAPL = findById(companiesArr, lineItem.id);
    const expected = '<tr><td>Apple</td><td>50</td><td>$227.06</td><td>$11,353.00</td></tr>';

    // act
    const dom = renderTableRow(AAPL, lineItem);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('calculate order total', (assert) => {
    // arrange
    const expected = 49147.5;

    // act
    const orderTotal = calcOrderTotal(cart, companiesArr);

    // assert
    assert.equal(orderTotal, expected);
});
