const isBlank = (str) => {
  return (str.length === 0) || !/[^ ]/.test(str) 
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true 
console.log(isBlank(''));     // true
