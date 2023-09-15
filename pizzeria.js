function pizzaOven(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.tipocorteza = pan;
    sandwich.tiposalsa = proteína;
    sandwich.quesos = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = pizzaOven("estilo chicago", "tradicional", ["mozarella"],["pepperoni", "salchicha"] );
console.log(s1);
var s2 = pizzaOven("lansada a mano", "marinara", ["mozarella", "feta"],["champiñones", "aceitunas", "cebollas"] )
console.log(s2)
var s3 = pizzaOven("lansada a mano", "pomarola", ["mozarella", "roquefort", "gouda "],["carne de res", "tocino", "pimenton"] )
console.log(s3)
var s4 = pizzaOven("napolitana", "pomarola", "provolone","pepperoni" )
console.log(s4)
