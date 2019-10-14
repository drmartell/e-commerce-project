import { addToCart } from '../products/add-to-cart.js';

const renderProductLi = (company) => {
    const li = document.createElement('li');

    const itemNameSpan = document.createElement('span');
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

    const dropdownDiv = createDiv('dropdown-div');
    li.appendChild(dropdownDiv);

    const select = document.createElement('select');
    select.id = company.id;
    dropdownDiv.appendChild(select);

    for (let i = 1; i <= 10; i++) {
        select.appendChild(createOption(i));
    }
    
    const buttonDiv = createDiv('button-div');
    li.appendChild(buttonDiv);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = company.id;
    button.addEventListener('click', e => addToCart(e.target.value));
    buttonDiv.appendChild(button);

    return li;
};

function createDiv(divId, content = null) {
    const thisDiv = document.createElement('div');
    thisDiv.id = divId;
    thisDiv.textContent = content;
    return thisDiv;
}

function createOption(value, text = null) {
    const thisOption = document.createElement('option');
    thisOption.value = value;
    thisOption.textContent = text === null ? value : text;
    return thisOption;
}
export default renderProductLi;
