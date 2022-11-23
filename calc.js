let op;

class Calculator {
  static plus(num1, num2) {
      return num1 + num2;
  }
  static minus(num1, num2) {
      return num1 - num2;
  }
  static mult(num1, num2) {
      return num1 * num2;
  }
  static divide(num1, num2) {
    if (num2 === 0) {
        alert('На ноль делить нельзя!');
    }
    return num1 / num2;
  }
}

function func() {
let num1 = Number(document.querySelector('#num1').value);
let num2 = Number(document.querySelector('#num2').value);

switch (op) {
      case '+':
        result = Calculator.plus(num1, num2);
        break;
      case '-':
        result = Calculator.minus(num1, num2);
        break;
      case '*':
        result = Calculator.mult(num1, num2);
        break;
      case '/':
        result = Calculator.divide(num1, num2);
        break;
    }
    document.getElementById("result").innerHTML = result;
}

