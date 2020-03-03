function sum() {
    let arr = [];

    //[...arguments].push(arr);
    arr.push(...arguments);
    console.log(arr);
}

sum(1, 2, 3);
