let fullOperation = '';
let result = '';

function pressButton(number) {
  console.log(number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let operationSymbol = op;
  if (op === 'POW') {
    operationSymbol = '^';
  }
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/|\^)/);
  if (operador) return;
  fullOperation = fullOperation + operationSymbol;
  showNumber();
}


function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '+':
      fullOperation = addition(number1, number2);
      break;
    case '-':
      fullOperation = subtraction(number1, number2);
      break;
    case '/':
      fullOperation = division(number1, number2);
      break;
    case '^':
      fullOperation = power(number1, number2);
      break;
    default:
      break;
  }
  
  showNumber();
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function addition(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function division(number1, number2) {
  if (number2 === 0) {
    return 'Error: Div by 0';
  }
  return number1 / number2;
}

function power(number1, number2) {
  return Math.pow(number1, number2);
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

function clearAndShowHistory() {
  if (fullOperation !== '') {
      const historyElement = document.getElementById('operation-history');
      const newOperation = document.createElement('li');
      newOperation.textContent = fullOperation;
      historyElement.appendChild(newOperation);
      fullOperation = '';
      showNumber();
      document.getElementById('history-section').style.display = 'block';
  }
}

showNumber();