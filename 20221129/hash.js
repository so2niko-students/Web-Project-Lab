const HASH_SIGN = '#';
const REGEXP_SPACE = /\s+/;
const EMPTY_STR = '';

function hashtagGenerator(str) {
  if (!str.length) return false;

  const hashStr = HASH_SIGN + str
    .split(REGEXP_SPACE)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(EMPTY_STR);


  return hashStr.length > 140 || hashStr.length == 1 ? false : hashStr;
}

console.log(hashtagGenerator(" Hello there thanks for trying my Kata"));
console.log(hashtagGenerator("    Hello     World   "));
console.log(hashtagGenerator(""));
//optional chaining


const hashTag = (sentence) => {

  if (sentence == "") {
      return false;
  } else {
      const words = sentence.trim().split(" ");
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i].trim()[0].toUpperCase() + words[i].substr(1);
      }
      let str = words.join("").toString();
      let tag = '#';
      let finalWord = `${tag}${str}`
      if (finalWord > 140) {
          return false
      } else {
          return finalWord;
      }
  }
}

function hashtagGenerator(phrase) {
  let wordArray = phrase.split(' ').filter(char => char !== "");
  let result = "#";
  
  if (wordArray.length === 0) {
    return false;
  };
  
  result += wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  
  return result.length <= 140 ? result : false;
}

console.log(hashTag(" Hello there thanks for trying my Kata"));
console.log(hashTag(""));
console.log(hashTag("                              "));