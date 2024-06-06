// Question 14

function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    return commonElements;
  }
  
  console.log(findCommonElements([24,6,2], [5, 4, 24])); //[24]