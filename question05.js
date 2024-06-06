// Question 05

const array = [4, "hello", 3, true, "Uki", 5];

const sumOfSquareNumbers = (array) =>

    array.filter (item => typeof item === "number") // 4 , 3 , 5
    .map (number => number ** 2) // 16 , 9 , 25
    .reduce((sum, sq) => sum + sq, 0); //0 + 16 + 9 + 25 = 50

const sumOfSquare = sumOfSquareNumbers(array);

console.log(sumOfSquare);