let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const contains = (element, array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      return true; 
    } 
  }
  return false;
}; 

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false