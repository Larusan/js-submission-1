// Question 04

const words = ["hello", "world", "javascript"];

let sentence = words.reduce((accumulated, current) => `${accumulated} ${current}`);

console.log(sentence);