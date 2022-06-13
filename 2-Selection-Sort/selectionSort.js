const arr = Array.from({ length: 10 }, (_, i) =>
  Math.trunc(Math.random() * 100)
);
//=> array with number between 0 and 100

let steps = 0; // store how many steps were required until find the element;

// It's a naive sorting algorithm with complexity O(n^2)
const selectionSort = (array) => {
  const newArray = [];

  // As splice will remove from array, do while there are elements left
  while (array.length) {
    const smallestItemIndex = getSmallestItemIndex(array);
    const item = array.splice(smallestItemIndex, 1)[0];
    newArray.push(item);
  }
  return newArray;
};

const getSmallestItemIndex = (array) => {
  let smallestItemIndex = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[smallestItemIndex]) {
      smallestItemIndex = i;
    }
  }
  return smallestItemIndex;
};

console.log("Before sort", arr);
console.log("After selectionSort", selectionSort(arr));
