import companiesArr from '../data/companies.js';
import { findById } from '../common/utils.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const test = QUnit.test;

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
