

import menuModuel from './MenuModuel.js'


const pizzaMenu = document.getElementById("pizza-menu");
const drinksMenu = document.getElementById("drinks-menu")

let htmlTxt = "";
let htmlTxttwo = "";

menuModuel.getAllPizza().forEach(menu => {
    htmlTxt += `
        <article class="menu">
        <div class="div-menu-pizza">
                <h3> title: ${menu.title}</h3>
                <h5> price:${menu.price}Kr</h5>
                <img src="${menu.image}">
                <p> info: ${menu.info}</p>
        </div>
        </article>
    `;
});

menuModuel.getAllDrinks().forEach(menu =>{
    htmlTxttwo += `
        <article class="menu">
        <div class="div-menu-pizza">
                <h3> title: ${menu.title}</h3>
                <h5> price:${menu.price}Kr</h5>
                <img src="${menu.image}">
                <p> info: ${menu.info}</p>
        </div>
        </article>
    `;
})

pizzaMenu.innerHTML = htmlTxt;
drinksMenu.innerHTML = htmlTxttwo;
