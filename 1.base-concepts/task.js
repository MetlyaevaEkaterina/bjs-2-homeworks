"use strict"
function solveEquation(a, b, c) {
  let discriminant = b**2 - 4 * a * c;
  let arr = [];

  if (discriminant === 0) {
    arr.push(-b / (2 * a))
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let loanAmount = amount - contribution;

  let monthPay = loanAmount * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  let sum = monthPay * countMonths;
  return Number(sum.toFixed(2))  
}