var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);


function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);


var pizza ={
    crustType:"",
    sauceType:"",
    cheeses:"",
    toppingss:""
}

function pizzaOven(crustType,sauceType, cheeses,toppingss){
 var pizza={};
 pizza.crustType = crustType;
 pizza.sauceType = sauceType;
 pizza.cheeses = cheeses;
 pizza.toppingss = toppingss;
 return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditionnal" ,"mozzarella" , ["pepperoni","sausage"]);
console.log(pizza1);


var pizza2 = pizzaOven("hand tossed", "marinara" ,["mozzarella","feta"] , ["mushrooms","olives","olives"]);
console.log(pizza2);

var mypizza = pizzaOven("maajna","harissa","jben arbi",["mergez","kwika"]);
console.log(mypizza);