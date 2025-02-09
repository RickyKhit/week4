const text = "Hello World";
// reverse
console.log(text.split("").reverse().join(""));

const array = [69, 786, 969, 538, 376, 420, 32];
// min and max
minVal = Math.min(...array);
maxVal = Math.max(...array);
console.log(`Min: ${minVal}, Max: ${maxVal}`);

// total
let total = 0;
let i = 0;

while (i < array.length) {
  total += array[i];
  i++;
}

console.log(`Total sum: ${total}`);
