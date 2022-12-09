String.prototype.mySplit = function(separator){
    const stringSep = String(separator);
    const stringThis = String(this);
    // console.log(this);
    // console.log(typeof this);
    if(stringSep === 'undefined' || stringSep === '[object Object]'){
        return [stringThis];
    }
}

const str = 'H1,2ell[]o, my ntrueundefinedame null i{}s .2..';

console.log('empty', str.split());
console.log('undefined', str.split(undefined));
console.log('{}', str.split({}));
console.log('empty', str.mySplit());
console.log('undefined', str.mySplit(undefined));
console.log('{}', str.mySplit({}));

// console.log('[]', str.split([]));
// console.log('empty string', str.split(''));

// console.log('[1, 2]', str.split([1, 2]));
// console.log('null', str.split(null));
// console.log('true', str.split(true));
// console.log('3', str.split(3));
// console.log('2', str.split(2));
// console.log('" "', str.split(' '));

// console.log('/\s/', str.split(/\s/));
