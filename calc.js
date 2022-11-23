let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let resultBtn = document.getElementById("result");
let op;


class Calculator {
  static plus(a, b) {
      return a + b;
  }
  static minus(a, b) {
      return a - b;
  }
  static mult(a, b) {
      return a * b;
  }
  static divide(a, b) {
    if (b === 0) {
        alert('На ноль делить нельзя!');
    }
    return a / b;
  }
}

function func() {
a = Number(num1.value);
b = Number(num2.value);

switch (op) {
      case '+':
        result = Calculator.plus(a, b);
        break;
      case '-':
        result = Calculator.minus(a, b);
        break;
      case '*':
        result = Calculator.mult(a, b);
        break;
      case '/':
        result = Calculator.divide(a, b);
        break;
    }
    resultBtn.innerHTML = result;
    num1.value = '';
    num2.value = '';
}

