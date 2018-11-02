// Backend
var pizzaPrice = {
    small: "small",
    medium: "medium",
    large: "large"
}

        //Pizza Constructor
function Pizza (pizzaSize, pizzaTopping, ) {
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaTopping;
}

        //Prototype for determing the customer's prices based off selections.
Pizza.prototype.getPrice = function() {
    if (this.pizzaSize = "small") {
        this.pizzaPrice = this.pizzaTopping +8;
        return this.pizzaPrice;
    }
    else if (this.pizzaSize = "medium") {        
        this.pizzaPrice = this.pizzaTopping +10;         
        return this.pizzaPrice;
    }
    else {
        this.pizzaPrice = this.pizzaTopping +12; 
        return this.pizzaPrice;
    }
}








// Front End
$(document).ready(function() {
$("form#form").submit(function(event) {
    event.preventDefault();

    var size = $("input#pizzaSize").children("option:selected").val();
    
    var pizzaTopping = [' '];
    $("input[type=checkbox][name=toppings]:checked").each(function(){            
        pizzaTopping.push($(this).val());
    });
    
    var myPizza = new Pizza (size, pizzaTopping, pizzaPrice);
        myPizza.getPrice();

            $("p#cost").text("Your order has been confirmed. You ordered a " + myPizza.size + " pizza with" + myPizza.pizzaTopping + " as your toppings." + " Your total will be $"+myPizza.pizzaPrice);
    });
});