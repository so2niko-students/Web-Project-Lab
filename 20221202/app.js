const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqg87sObNTiO5w9ePSpt_cLqtM6k5CAKffWqte5hS7i7ARu42JYOUBwXU5C6Nmw3JD74r-JW7naCUD/pub?gid=0&single=true&output=csv';

fetch(URL).then(r => r.text()).then(d => console.log(d.split('\n')));

const pushZerosToEnd = (array) => {
    let count = 0;
    let n = array.length;
    for (let i = 0; i < n; i++)
        if (array[i] !== 0)
            array[count++] = array[i];
    while (count < n) array[count++] = 0;
    return array;
}

// console.log(pushZerosToEnd([1, 0, 8, 4, 0,"a", 0,{}, 2,null, 7, 0, 6, 0, 9]));
console.log(pushZerosToEnd(['', 1, 0, undefined, 8, 4, null, 0,"a", 0, {}, 2,null, 7, 0, 6, 0, 9]));