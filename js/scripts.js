// Backend
var pizzaPrice = 0;


        //Pizza Constructor
function Pizza (pizzaSize, pizzaTopping) {
    this.pizzaSize = pizzaSize,
    this.pizzaTopping = pizzaTopping,
    this.pizzaPrice = 0;
}

        //Prototype for determing the customer's prices based off selections.
Pizza.prototype.getPrice = function() {
    if (this.pizzaSize === 'small') {
        this.pizzaPrice = this.pizzaTopping.length + 8
        return this.pizzaPrice 
    }
    else if (this.pizzaSize === 'medium') {        
        this.pizzaPrice = this.pizzaTopping.length + 11         
        return this.pizzaPrice
    }
    else {
        this.pizzaPrice = this.pizzaTopping.length + 13 
        return this.pizzaPrice
    }
}








// Front End
$(document).ready(function() {
    event.preventDefault();
$("form#form").submit(functoin(event) {
    var selectedPizzaSize = $("select#pizzaSize").children("option:selected").val();
    var selectedToppings = [];
        $("input[type=checkbox][name=]
    }
});