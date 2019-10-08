// const renderProductUlMyWay = (company) => {
//     const ulInnerHTML = '' +
//         `<li>
//             <span id="item-name">${company.name}</span>
//             <div id="image-div"><img src="${company.image}" alt="${company.id}" /></div>
//             <div id="description-div">${company.description}</div>
//             <div id="category-div">${company.category}</div>
//             <div id="price-div">$${company.price.toFixed(2)}<span> per share</span></div>
//             <div id="button-div"><button value="${company.id}">Add</button></div>
//         </li>
//     `.trim().replace(/>\s+</g, '><');
//     return ulInnerHTML;
// };

const renderProductLi = (company) => {
    const li = document.createElement('li');

    const itemNameSpan = document.createElement('span');
    itemNameSpan.id = 'item-name';
    itemNameSpan.textContent = company.name;
    li.appendChild(itemNameSpan);

    const imageDiv = createDiv('image-div');
    li.appendChild(imageDiv);

    const img = document.createElement('img');
    img.src = company.image;
    img.alt = company.id;
    imageDiv.appendChild(img);

    const descriptionDiv = createDiv('description-div', company.description);
    li.appendChild(descriptionDiv);

    const categoryDiv = createDiv('category-div', company.category);
    li.appendChild(categoryDiv);

    const priceDiv = createDiv('price-div', '$' + company.price.toFixed(2));
    li.appendChild(priceDiv);

    const perShareSpan = document.createElement('span');
    perShareSpan.textContent = ' per share';
    priceDiv.appendChild(perShareSpan);

    const buttonDiv = createDiv('button-div');
    li.appendChild(buttonDiv);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = company.id;
    buttonDiv.appendChild(button);

    return li.innerHTML;
};

function createDiv(divId, content = '') {
    const thisDiv = document.createElement('div');
    thisDiv.id = divId;
    thisDiv.textContent = content;
    return thisDiv;
}

export default renderProductLi;
