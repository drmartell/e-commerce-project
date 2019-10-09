import companiesArr from '../data/companies.js';
//import renderProductLi from '../products/render-product.js';
import { findById } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';

const test = QUnit.test;

// test('generated HTML should match hard coded HTML', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
//     const domHTML = '<span id="item-name">Apple</span><div id="image-div"><img src="https://logo.clearbit.com/apple.com" alt="AAPL"></div><div id="description-div">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</div><div id="category-div">Consumer Electronics</div><div id="price-div">$227.06<span> per share</span></div><div id="button-div"><button value="AAPL">Add</button></div>';
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const result = renderProductLi(companiesArr[2]);

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(result, domHTML);
// });

test('findById should return company with id that matches one passed in', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        id: 'AAPL',
        name: 'Apple',
        image: 'https://logo.clearbit.com/apple.com',
        description: 'Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.',
        category: 'Consumer Electronics',
        price: 227.06
    };

    const aaplId = 'AAPL';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(companiesArr, aaplId);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
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

// test('generated HTML should match hard coded HTML', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
//     const apple {};

//     const appleOrder = {
//         id: 'apple',
//         quantity: 4
//     };
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const fruitElementTr = renderTableRow(apple, appleOrder);

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(result, domHTML);
// });