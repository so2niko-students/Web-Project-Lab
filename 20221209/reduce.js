Array.prototype.myReduce = function(callback, defAcc) {
    const isDefAcc = defAcc !== undefined;
    let accumulator = isDefAcc ? defAcc : this[0];
    let start = isDefAcc ? 0 : 1;

    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

const arr3 = [1, 2, 3];
console.log(arr3.myReduce((accumulator, element) => accumulator + element, 0));