import companiesArr from './companies.js';
import renderProductUl from './render-product.js';

const mainSection = document.getElementsByTagName('section')[0];

companiesArr.forEach(company => {
    const ul = document.createElement('ul');
    ul.innerHTML = renderProductUl(company);
    mainSection.appendChild(ul);
});

export default renderProductUl;
