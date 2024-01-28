//#### The Problem is : ####
// const makeHelloFunction = () => {
//   const arr = [];

//   for(var i = 0; i < 5; i++){
//     arr.push(function () {console.log(i)})
//   }

//   return arr;
// }

// const functionArr = makeHelloFunction();
// functionArr[0]() // output : 5


// #### The solution with iife is : ####
const makeHelloFunction = () => {
  const arr = [];

  for(var i = 0; i < 5; i++){
    arr.push((function(x) {
      return function () {
        console.log(x)
      }
    })(i))
  }

  return arr;
}

const functionArr = makeHelloFunction();
functionArr[0]() //output : 0
