"use strict"

var test_array_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search(search, array) {
  // Your code here
  var batasKiri = 0
  var batasKanan = array.length - 1;

  while(batasKiri <= batasKanan){
    let tengah = Math.floor((batasKiri+batasKanan)/2);
    if(search<array[tengah]){
      batasKanan = tengah-1
    }
    else if(search>array[tengah]){
      batasKiri = tengah+1
    } else {
      return tengah;
    }

  }
  return "-1"
}

// Driver code
console.log(binary_search(5, test_array_a))
console.log(binary_search(6, test_array_b))
console.log(binary_search(10, test_array_a))
console.log(binary_search(11, test_array_b))
console.log(binary_search(2, test_array_a))
console.log(binary_search(2, test_array_b))
