// //Question 06

const array = [42,58,64,75,86,92];

function reverseArray(num) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(num[i]);
    }

    return reversedArray;
}

const reversedArray = reverseArray(array);

console.log(reversedArray);