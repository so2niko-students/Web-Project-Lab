function f2(url) {
    const totalAscii = url.split('').reduce((acc, char) => acc + char.charCodeAt(), 0);
    const answ = (new Array(4)).fill('').map((el, i) => totalAscii * (i + 1) % 256);
    return answ;
  };


  function moveZeros(arr) {
    let result = arr.filter(element => element !== 0)
    let countZeros = arr.filter(v => v === 0);
    for (let element in countZeros) {
      result.push(0);
    }
    return result;
  };