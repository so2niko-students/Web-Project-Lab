function moveZeros(arr) {
  return arr.sort((a, b) => {
    const answer = b === 0 ? -1 : a === 0 ? 1 : 0;
    console.log(`${ arr } =>  ${ a } & ${ b }. ${ answer }`);
  });
}

function moveZeros(arr) {
    const {z, nZ} = arr.reduce((acc, el) => {
        const where = el === 0 ? 'z' : 'nZ';
        acc[where].push(el);
        return acc;
    } , { z : [], nZ : [] });

    return [...nZ, ...z];
  }


console.log(moveZeros([false, 1, 0, 3, 2, 0, 5, 4, "a"]));
