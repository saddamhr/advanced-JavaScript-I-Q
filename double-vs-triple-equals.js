/**
 * Triple Equals
 * When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.
 */

 if(5 === 5) {
     console.log('true');
 }

 if(5 === '5') {
     console.log('false');
 }

 /**
 * Double equals
 * When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion.
 * Type coercion means that two values are compared only after attempting to convert them into a common type.
 */

 if(7 == '7') {
     console.log('true');
 }

 if(false == 0) {
     console.log('true');
 }