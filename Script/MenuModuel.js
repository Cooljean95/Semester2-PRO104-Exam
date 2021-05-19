
const menuModuel = ( function(){

    const menuPizza = [
        {title:"ggg", price:22, image:"geses", info:"ges"},
        {title:"ges", price:22, image:"sge", info:"seg" },
        {title:"egs", price:22, image:"esg", info:"esg" },
        {title:"esg", price:22, image:"esg", info:"esg" },
        {title:"seg", price:22, image:"esg", info:"seg" }
    ];
    
    const menuDrinks = [
        {title:"", price:22, image:"", info:"" },
        {title:"", price:22, image:"", info:"" },
        {title:"", price:22, image:"", info:"" },
        {title:"", price:22, image:"", info:"" }
    ];
    
    const getAllPizza = () => {
        return menuPizza
    };
    
    const getAllDrinks = () => {
        return menuDrinks
    };
    
    const getPizzaByTitle = (title) => {
        return menuPizza.filter(pizzaTittle => pizzaTittle.title === title)
    };
    
    const getDrinksByTitle = (title) => {
        return menuDrinks.filter(drinksTitle => drinksTitle.title === title)
    };
    
    return {getAllDrinks, getAllPizza, getDrinksByTitle, getPizzaByTitle}
     
    }());
    
    export default menuModuel;