// IMPORT MODULES under test here:
import companiesArr from '../src/companies.js';
import renderProductUl from '../src/products.js';

const test = QUnit.test;

test('generated HTML should match hard coded HTML', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const domHTML = `<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL"></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06</li><div id="button-div"><button value="AAPL">Add</button></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderProductUl(companiesArr[2]);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, domHTML);
});
