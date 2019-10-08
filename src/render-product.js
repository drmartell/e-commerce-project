const renderProductUl = (company) => {
    const ulInnerHTML = '' +
        `<li id="name-li">${company.name}</li>
        <li id="image-li"><img src="${company.image}" alt="${company.id}" /></li>
        <li id="description-li">${company.description}</li>
        <li id="category-li">${company.category}</li>
        <li id="price-li">$${company.price.toFixed(2)}<span> per share</span></li>
        <li id="button-div"><button value="${company.id}">Add</button></li>
    `.trim().replace(/>\s+</g, '><');
    return ulInnerHTML;
};

export default renderProductUl;
