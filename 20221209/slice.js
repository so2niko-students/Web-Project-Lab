Array.prototype.slicePolyfill = function(start = 0, end) {
    const arr = [];

    // end = end || this.length;//undefined, null, 0, ''
    const newEnd = end ?? this.length;//undefined, null

    for (let i = start; i < newEnd; i += 1) {
        arr.push(this[i], i, this);
    }

    return arr;
}

console.log(numbers.slicePolyfill(2,4));
console.log(numbers.slicePolyfill());
