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

      $(".operator").on("click", function () {
        operator = $(this).val();
        operatorChosen = true;
        $("#operator").text(operator)
      })
        
    $(".equal").on("click", function () {
        var firstNumber = parseInt(firstNumString);
        var secondNumber = parseInt(secondNumString);

        if(operator === "plus") {
            resultEl.text(firstNumber + secondNumber);
          }
      
          else if(operator === "minus") {
          resultEl.text(firstNumber - secondNumber);
          }
      
      
          else if(operator === "divide") {
          resultEl.text(firstNumber / secondNumber);
          }
      
          else if(operator === "times") {
          resultEl.text(firstNumber * secondNumber);
          }
        })
        
        $(".clear").on("click", function () {
            $("#first-number, #second-number, #operator, #result").empty();
          })
        
        });