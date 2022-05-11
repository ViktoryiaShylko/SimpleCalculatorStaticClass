let option; 

function action() {

  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  switch (option) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
   if (num2 === 0){
    document.getElementById('result').innerHTML = "Can not divide by zero!";
   }
   else{
    document.getElementById("result").innerHTML = result;
   }
}

