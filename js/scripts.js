function Order(topping, size) {
  this.topping = topping;
  this.size = size;
}

Order.prototype.pricing = function() {
  if (this.size === 16 && this.topping <= 2) {
    return ("The final price for your pizza is $16.00.")
  } else if (this.size === 16 && this.topping >= 3) {
    return ("the final price for your pizza is $18.00.")
  } else if (this.size === 12 && this.topping <= 2) {
    return ("The final price for your pizza is $13.00.")
  } else if (this.size === 12 && this.topping >= 3) {
    return ("The final price of your pizza is $15.00.")
  } else if (this.size === 8 && this.topping <= 2) {
    return ("The final price of your pizza is $10.00.")
  } else if (this.size === 8 && this.topping >= 3) {
    return ("The final price of your pizza is $12.00.")
  }
  return ("The final price of the " + this.size + " inch pizza with " + this.topping + " will be " + price);
}


//User interface logic
$(document).ready(function() {
  $("form#topping_choices").submit(function(event) {
    event.preventDefault();
    $("#finalPrice").show();

    var numberOfToppings = 0;

    $("input:checkbox[name=topping-choices]:checked").each(function() {
      numberOfToppings += 1;
      var toppingsSelected = $(this).val();

      console.log(numberOfToppings);
    });

    var size = parseInt($("input:radio[name=size]:checked").val());
    var newOrder = new Order(numberOfToppings, size);
    console.log(newOrder.pricing());
    $("#finalPrice").append(newOrder.pricing());

     $("#topping_choices").hide();
  });

});
