// Break
const nums = [1, 2, 3, 4, 6, 7, 8, 9];

for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 3) {
        break;
    }
    console.log(nums[i]);
}

// continue
const numss = [1, -3, 2, 3, 4, -4, 6, 7, 8, 9];

for(let i = 0; i < nums.length; i++) {
    if(numss[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}