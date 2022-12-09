function createPhoneNumber(numbers) {
  const phoneNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(
    3,
    6
  )}-${numbers.slice(6)}`;
  return phoneNumber;
}

function createPhoneNumber(arr) {
  const arrC = [...arr];
  const spljoin = () => arrC.splice(0, 3).join("");
  let phoneNumber = "(";
  phoneNumber += spljoin();
  phoneNumber += ") ";
  phoneNumber += spljoin();
  phoneNumber += "-";
  phoneNumber += arrC.join("");
  return phoneNumber;
}

function phoneNumber(tnumber) {
  return tnumber.reduce(
    (acc, item) => acc.replace("x", item),
    "(xxx) xxx-xxxx"
  );
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
