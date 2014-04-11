(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mult').click(mult);
    $('#div').click(div);
    $('#pow').click(pow);
    $('#root').click(root);
    $('#fact').click(fact);

  }

  function pow(){
    var numbers = getInput();
    var result = Math.pow(numbers[0], numbers[1]);
    display(result);
  }

  function root(){
    var numbers = getInput();
    numbers[1] = 0.5;
    var result = Math.pow(numbers[0], numbers[1]);
    display(result);
  }

  function fact(){
    var numbers = getInput();
    var result;
    factorial(numbers[0]);
    function factorial(num){
      if(num===0){
        result = 1;
        return result;
      }
      result = num * factorial(num-1);
      return result;
    }
    display(result);
  }

  function sub(){
    var numbers = getInput();
    var result = numbers[0] - numbers[1];
    display(result);
  }

  function add(){
    var numbers = getInput();
    var result = numbers[0] + numbers[1];
    display(result);
  }

  function mult(){
    var numbers = getInput();
    var result = numbers[0] * numbers[1];
    display(result);
  }

  function div(){
    var numbers = getInput();
    var result = numbers[0] / numbers[1];
    display(result);
  }

  function getInput(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x,y];
  }

  function display(result){
    $('#answer').text(result);
  }









})();
