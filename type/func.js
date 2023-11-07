//  const findPalindrom=(num:string):boolean =>{
//  const rev=num.split("").reverse().join("")
//     return rev==num
//  }
//  const result=findPalindrom("34403")
//  console.log(result)
var calculateAvg = function (num1) {
    var total = 0;
    var avg;
    total = num1.reduce(function (acc, i) { return acc + i; });
    avg = total / num1.length;
    return avg;
};
var data = calculateAvg([2, 2, 2, 2]);
console.log(data);
