$(document).ready(function() {

    var firstNumString = "";
    var secondNumString = "";
    var operator = "";
    var operatorChosen = false;
    var resultEl = $("#result");

    $(".number").on("click", function (){
        var number = $(this).val();
    
        if(operatorChosen === false) {
          firstNumString += number;
          $("#first-number").text(firstNumString);
    
        }
        else if(operatorChosen === true) {
          secondNumString += number;
          $("#second-number").text(secondNumString);
        }
      })