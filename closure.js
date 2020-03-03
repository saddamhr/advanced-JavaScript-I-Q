// Function return from function
function counter() {
    let cnt = 0;
    return function() {
        cnt++;
        return cnt;
    }
}
const cnt1 = counter();
console.log(cnt1());
console.log(cnt1());
console.log(cnt1());
console.log(cnt1());

const cnt2 = counter();

console.log(cnt2());
console.log(cnt2());
console.log(cnt2());
console.log(cnt2());
console.log(cnt2());