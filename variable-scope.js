/**
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 */

let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if(result > 9){
        //let mood = 'Happy';
        var mood = 'Happy';
        mood = 'fishy';
        mood = 'funky';
        mood = 'cranky';
        console.log(mood);
    }
    //console.log(mood);
    return result;
}


console.log(sum(3, 7));

//console.log(output);
console.log(20);