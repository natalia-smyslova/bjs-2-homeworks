"use strict";

function solveEquation(a, b, c) {
  let arr=[];
  let d=b**2-4*a*c;
  if (d<0) {
  }
  else if (d==0){
  arr[0]=-1*b/(2*a);
}
  else {
  let x1=0;
  let x2=0;
  arr[0]=(-1*b + Math.sqrt(d) )/(2*a);
  arr[1]=(-1*b - Math.sqrt(d) )/(2*a);
  }
  return arr; 
	}
  
  
  function getValueByID(ID)
  {
    return document.getElementById(ID).value;
  }
  
  function show3()
  { let Percent = getValueByID("percent");
    console.log("Если это решение не то, о чем Вы говорили, прошу предоставить мне ссылку на пример как должно быть.");
    let Contribution = getValueByID("contribution");
    let Amount = getValueByID("amount");
    let Date = getValueByID("dateto");
    let result=calculateTotalMortgage(Percent, Contribution,Amount,Date);
  }

  function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount=0;
  let dateFrom = new Date();
  let dateTo = new Date (date);
  let n=(dateTo.getFullYear()*12 + dateTo.getMonth())-(dateFrom.getFullYear()*12 + dateFrom.getMonth());
  let S = amount - contribution;
  let P = percent/12/100;
  totalAmount=S*(P+ (P /(((1+P)**n)-1)));
  totalAmount=totalAmount*n;
  console.log (totalAmount.toFixed(2));
  return totalAmount;
    } 

    