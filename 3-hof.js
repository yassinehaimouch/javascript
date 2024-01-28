function map(arr, fn) {
  const newArr = [];
  arr.forEach(el => {
    newArr.push(fn(el));
  });
  return newArr
}

const addOne = (num) => {
  return num + 1;
}
const x = [0, 1, 2, 3];

console.log(map(x, addOne))