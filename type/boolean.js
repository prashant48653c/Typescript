var isEven = false;
function calculate(a) {
    if (a % 2 === 0) {
        isEven = true;
    }
    return isEven;
}
calculate(44);
console.log("the number is even.".concat(isEven));
