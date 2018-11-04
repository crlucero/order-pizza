// Backend
var pizzaPrice = {
    small: 'small',
    medium: 'medium',
    large: 'large'
}

function Pizza (pizzaSize, pizzaTopping) {
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaTopping;
    this.pizzaPrice = 0;
}

        //Prototype for determing the customer's prices based off selections.
Pizza.prototype.getPrice = function() {

    if (this.pizzaSize === "small") {
        this.pizzaPrice = this.pizzaTopping.length +8;
        return this.pizzaPrice
     }
     else if  (this.pizzaSize === "medium") {        
         this.pizzaPrice = this.pizzaTopping.length +10;    
         return pizzaPrice
     }
     else {
         this.pizzaPrice = this.pizzaTopping.length +12;
         return this.pizzaPrice
     }
        //  alert("You did not select a size. Please choose the size of pizza you would like to order.")
         
}

// Front End
$(document).ready(function() {

    $("form#form").submit(function(event) {
        event.preventDefault();
        
        var pizzaSize = $("select#pizzaSize").children("option:selected").val();
        var pizzaTopping = [' '];
        $("input[type=checkbox][name=toppings]:checked").each(function(){            
            pizzaTopping.push($(this).val());
        });
    
    var myPizza = new Pizza(pizzaSize, pizzaTopping, pizzaPrice);
        myPizza.getPrice();

            $("p#cost").text("Your order has been confirmed. You ordered a " 
            + myPizza.pizzaSize + " pizza with" + myPizza.pizzaTopping + " as your toppings." + 
            " Your total will be $" + myPizza.pizzaPrice);
    });
});