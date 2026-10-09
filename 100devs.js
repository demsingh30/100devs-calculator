
function Calculator() {
  this.firstNumber = 0
  this.secondNumber = 0
  this.operator = null
  this.clear = function ()  {
    this.firstNumber = 0
    this.secondNumber = 0
    this.operator = null
  }

this.digit = function (num) {
  if (this.operator === null) {
    this.firstNumber = num;
  } else {
    this.secondNumber = num;
  }
}
this.setOperator = function (op) {
this.operator = op
}
this.equals = function () {
if (this.operator === '+') {
  return this.firstNumber + this.secondNumber
}
else if (this.operator === '-') {
  return this.firstNumber - this.secondNumber
}
else if (this.operator === 'x') {
  return this.firstNumber * this.secondNumber
}
else if (this.operator === '/') {
  return this.firstNumber / this.secondNumber
}
}
}



const calc = new Calculator();
calc.digit(8);
calc.setOperator('/');
calc.digit(3);
console.log(calc.equals());
