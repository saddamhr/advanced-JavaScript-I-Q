/**
 * Various way to getting undefined in JavaScript
 */ 

 // Not assign the value in variable
let names;
console.log(names);

// Not return from function
function add(num1, num2) {
    console.log(num1 + num2);
}
console.log(add(1, 2));

// Not passing the parameters in function
function add1(num1, num2=1) {
    console.log(num2);
}

add1(10);

const saddamRakib = {
    name: 'Saddam',
    phone: 2345
}

console.log(saddamRakib.age);

let fun = undefined;
console.log(fun);

const ages = [20, 25, 22];
console.log(ages[10]);

 