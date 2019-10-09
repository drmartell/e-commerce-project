import companiesArr from '../data/companies.js';
import renderProductLi from '../products/render-product.js';

const mainSection = document.getElementsByTagName('ul')[0];

companiesArr.forEach(company => {
    const li = document.createElement('li');
    li.innerHTML = renderProductLi(company);
    mainSection.appendChild(li);
});

export default renderProductLi;
