const deepCopy = (obj) => {
  const newObject = {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
};

const o = {
  a: "a",
  b: "b",
};

const o2 = deepCopy(o);
o.a = "new value";

console.log(o2); // { a: 'a', b: 'b' }
console.log(o); // { a: 'new value', b: 'b' }