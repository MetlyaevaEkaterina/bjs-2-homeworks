"use strict"
function solveEquation(a, b, c) {
<<<<<<< HEAD
  let discriminant = b**2 - 4 * a * c;
  let arr = [];

  if (discriminant === 0) {
    arr.push(-b / (2 * a))
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
=======
  let dis = b**2 - 4 * a * c;
  let arr = [];

  if (dis === 0) {
    arr.push(-b / (2 * a))
  } else if (dis > 0) {
    arr.push((-b + Math.sqrt(dis)) / (2 * a));
    arr.push((-b - Math.sqrt(dis)) / (2 * a))
>>>>>>> 73c5cf9fd1fb0de87b9c211adc2c603b22637acc
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
<<<<<<< HEAD
  let monthlyRate = (percent / 100) / 12;
  let loanAmount = amount - contribution;

  let monthPay = loanAmount * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  let sum = monthPay * countMonths;
  return Number(sum.toFixed(2))  
=======
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return "Есть не числовое выражение, исправьте"
  } else {
    let P = (percent / 100) / 12;
    let n = countMonths;
    let S = amount - contribution;

    let monthPay = S * (P + (P / (((1 + P)**n) - 1)));
    let sum = monthPay * countMonths;
    return sum.toFixed(2)
  }
>>>>>>> 73c5cf9fd1fb0de87b9c211adc2c603b22637acc
}