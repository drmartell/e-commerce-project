import companiesArr from '../data/companies.js';
import renderProductLi from '../products/render-product.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import cart from '../data/cart.js';

const test = QUnit.test;

test('generated HTML should match hard coded HTML', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    //const domHTML = '<li id="name-li">Apple</li><li id="image-li"><img src="https://logo.clearbit.com/apple.com" alt="AAPL" /></li><li id="description-li">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</li><li id="category-li">Consumer Electronics</li><li id="price-li">$227.06<span> per share</span></li><li id="button-div"><button value="AAPL">Add</button></li>';
    const domHTML = '<li><span>Apple</span><div id="image-div"><img src="https://logo.clearbit.com/apple.com" alt="AAPL"></div><div id="description-div">Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers.</div><div id="category-div">Consumer Electronics</div><div id="price-div">$227.06<span> per share</span></div><div id="dropdown-div"><select id="AAPL"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></div><div id="button-div"><button value="AAPL">Add</button></div></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderProductLi(companiesArr[2]).outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, domHTML);
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
