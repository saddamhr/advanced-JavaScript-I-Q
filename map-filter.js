// Using array
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i <numbers.length; i++) {
    output.push(numbers[i] * numbers[i]);
}
console.log(output);


 // Using map
//const numbers = [3, 4, 5, 6, 7, 8];
const res = numbers.map(function(element) {
     //console.log(element, index, array);
     return element * element;
 });

const res = numbers.map(x => x * x);

console.log(res);

// Filter return an array
const bigger = numbers.filter(x => x === 5);
// Find return only one elements
const isThere = numbers.find(x => x > 5);

console.log(isThere);