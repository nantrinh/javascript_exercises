let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// regex
console.log(/x/.test(byteSequence)); // true

// O(n)
const contains = (str, character) => {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === character) {
      return true; 
    }
    i += 1;
  }
  return false;
}

console.log(contains(byteSequence, 'x')); // true
console.log(contains(byteSequence, ';')); // false
