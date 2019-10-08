import companiesArr from '../data/companies.js/index.js';
import renderProductLi from '../products/render-product.js/index.js';

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

test('generated HTML should match hard coded HTML', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
    const apple {};

    const appleOrder = {
        id: 'apple',
        quantity: 4
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const fruitElementTr = renderTableRow(apple, appleOrder);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, domHTML);
});
