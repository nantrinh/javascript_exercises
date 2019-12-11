const repeat = (n, string) => {
  let result = ''

  while (n > 0) {
    result += string 
    n -= 1
  }

  return result;
}

console.log(repeat(3, 'ha'));
