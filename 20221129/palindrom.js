function nextPal2(val = 10) {
  for (let i = val + 1; true; i++) {
    console.log(val, i);
    if ([...String(i)].reverse().join("") == i) {
      return i;
    }
  }
}

const nextPal = (val) => {
  let reverse;
  let str;
  do{
      val += 1;
      str = val.toString();
      reverse = "";
      for (let i = str.length; i--;) {
          reverse += str[i];
      }
  }while(reverse != str);

  return parseInt(str);
}

console.log(nextPal(2541))
console.log(nextPal(11));
console.log(nextPal(188));
console.log(nextPal(191));
console.log(nextPal(2541));
// console.log(nextPal(-222));
// console.log(nextPal(''));
// console.log(nextPal());
// console.log(nextPal(true));
// console.log(nextPal(false));
// console.log(nextPal(null));
// console.log(nextPal({}));

