// Print an array of all the drinks on the menu
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

// Print an array of drinks that cost $5 and under
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

// Print an array of drinks that are priced at an even number 
function evenPrices (arr){
    let drinks = []
    for (let index = 0; index < arr.length; index++){ 
        const element = arr[index];
        if (element.price % 2 === 0) {

            drinks.push(element.name)
        }
    }
    return drinks
    }
console.log(evenPrices(coffeeMenu));


// Print the total if you were to order one of every drink

function total(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++){
        const element = arr[index];
        sum += element.price 
    }
    return sum  
}
console.log(total(coffeeMenu))

// Print an array with all the drinks that are seasonal

function seasonalDrinks(arr){
    let drinks = []
    for (let index = 0; index < arr.length; index++){
        const element = arr[index];    
        drinks.push(element.name)
}
return drinks
}
console.log(seasonalDrinks(coffeeMenu))

// Print all the seasonal drinks with the words "with imported beans" after the item name
