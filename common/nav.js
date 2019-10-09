const navElement = document.createElement('nav');
const homeLink = '<a href="../src/">Home</a>';
const productsLink = '<a href="../products/">Companies</a>';
const cartLink = '<a href="../shopping-cart/">Cart</a>';
[homeLink, productsLink, cartLink]
    .forEach(
        link => navElement.innerHTML += link
    );
const pageBody = document.querySelector('body');
pageBody.appendChild(navElement);
