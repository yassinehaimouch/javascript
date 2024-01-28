const makeHelloFunction = () => {
  const message = "Hello!";

  const sayHello = () => {
    console.log(message);
  }

  return sayHello;
}

const sayHello = makeHelloFunction();
console.log('typeof message:', typeof message);
console.log(sayHello.toString());

sayHello();