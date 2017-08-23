// Write your Pizza Builder JavaScript in this file.


$( document ).ready(function() {

  var totalPrice = 13;
  var newValue;
  $("strong").html("$ " + totalPrice);

  function findOutTypeOfTopping(topping) {
    switch(topping) {
      case 'btn-pepperonni'    :
      case 'btn-green-peppers' :
      case 'btn-mushrooms'     :
        newValue = 1;
        updatePrice(topping);
        break;
      case 'btn-crust' :
        newValue = 5;
        updatePrice(topping);
        break;
      case 'btn-sauce' :
        newValue = 3;
        updatePrice(topping);
        break;
    }
  }

  function updatePrice (toppingClassName) {

    if ($('.' + toppingClassName).hasClass("active")){
      totalPrice += newValue;
      $("strong").html("$ " + totalPrice);
    }
    else {
      totalPrice -= newValue;
      $("strong").html("$ " + totalPrice);
    }

  }

  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("#price-list li:last").toggle();
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("#price-list li:nth(3)").toggle();

  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("#price-list li:first").toggle();
    findOutTypeOfTopping(this.classList[1]);
  });

  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $("#price-list li:nth(1)").toggle();
    findOutTypeOfTopping(this.classList[1]);
  });

  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $("#price-list li:nth(2)").toggle();
    findOutTypeOfTopping(this.classList[1]);
  });

  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("#price-list li:last").toggle();
    findOutTypeOfTopping(this.classList[1]);
  });

  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("#price-list li:nth(3)").toggle();
    findOutTypeOfTopping(this.classList[1]);
    // checkPrice(this);
  });

//   function checkPrice ($element) {
//
//   if ($element.hasClass("active")){
//     console.log("I have active class");
//     totalPrice += 3;
//     $("strong").html("$ " + totalPrice);
//   }
//   else {
//     totalPrice -= 3;
//     $("strong").html("$ " + totalPrice);
//   }
// }
  // function checkPrice ($element) {
  //   if ($element.hasClass("active")){
  //     console.log("I have active class");
  //   }
  // }

// if ($(".btn-pepperonni").hasClass("active")){
//   console.log("I have active class");
//   totalPrice += 1;
//   console.log(totalPrice);
// }
// else {
//   totalPrice -= 1;
//   console.log(totalPrice);
// }

  // checkPrice("button-crust");

});




// btn-crust
