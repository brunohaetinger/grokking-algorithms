const arr = Array.from({ length: 100 }, (_, i) => i + 1);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ..., N]

const simpleSearch = (itemToFind, array) => {
  let steps = 0; // store how many steps were required until find the element;

  for (let item of array) {
    steps++;

    if (item === itemToFind) {
      console.log(`Simple search took ${steps} steps.`);

      return item;
    }
  }
};

const binarySearch = (itemToFind, array) => {
  if (!array.length) return;
  let steps = 0; // store how many steps were required until find the element;

  let low = 0;
  let high = array.length - 1;

  while (low < high) {
    steps++;
    const mid = Math.trunc((high + low) / 2);
    const midValue = array[mid];
    if (itemToFind > midValue) {
      low = mid;
    } else if (itemToFind < midValue) {
      high = mid;
    } else {
      // is Equal
      console.log(`Binary search took ${steps} steps.`);
      return midValue;
    }
  }
  return;
};

console.log("Simple search", simpleSearch(7, arr));
console.log("Binary search", binarySearch(7, arr));
