const navElement = document.createElement('nav');
//const span = document.createElement('span');
const homeLink = '<a href="../src/">Home</a>';
const productsLink = '<a href="../products/">Products</a>';
const cartLink = '<a href="../shopping-cart/">Cart</a>';
[homeLink, productsLink, cartLink]
    .forEach(
        link => navElement.innerHTML += link
        //link => navElement.appendChild(span).innerHTML = link
    );
//navBar.innerHTML = '<a href="../src/">Home</a>';
const pageBody = document.querySelector('body');
pageBody.appendChild(navElement);