const coffeeMenu = require("./coffee_data");

function allDrinks (arr) {
    let drinks = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    drinks.push(element.name)  
}
return drinks
}

console.log(allDrinks(coffeeMenu))

function drinkPrices (arr) {
    let price = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.price <=5){
            price.push(element.name)
            
        }
        
    }
    return price
}

console.log(drinkPrices(coffeeMenu))