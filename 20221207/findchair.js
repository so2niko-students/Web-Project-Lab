let meeting2 = (rooms,chairs) =>{

    if(0 == chairs) return 'Game On';
  
    let freeChairs = rooms.map(([x,y]) => Math.max(...[y - x.length, 0]));
    let sum = freeChairs.reduce((a,b) => a + b , 0);
  
    if ( sum < chairs) {
  
      return 'Not enough!';
  
    } else {
     let sum2 = 0;
     let result = [];
  
     while(sum2 < chairs){
      let temp = freeChairs.shift();
  
      sum2 += temp;
      result.push(temp);  
     }
  
     return result;
    }
  }
  
  function meeting(x, need) {
    const borrow = [];
    if (!need) return 'Game On';

    for (let [used, chairs] of x) {
        const ch = Math.min(need, Math.max(0, chairs - used.length));
        borrow.push(ch);
        need -= ch;
        if (!need) return borrow;
    }
    return 'Not enough!';
}
// console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));

  console.log(meeting([['XXX', 6], ['XXXXX', 8], ['XXXXXX', 9]], 4));//[3, 1] !== [3, 3]
//   console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
//   console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
//   console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));