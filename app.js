// function reverseWords(str) {
//     let words = [];
//     let word = '';
//     let n = str.length;
//     // Traverse the string and extract words
//     for (let i = 0; i < n; i++) {
//         if (str[i] !== ' ') {
//             word += str[i];  // Build the current word character by character
//         } else {
//             if (word.length > 0) {
//                 words.push(word);  // Add the word to the words array
//                 word = '';  // Reset word for the next one
//             }
//         }
//     }
//     // Add the last word if there is one
//     if (word.length > 0) {
//         words.push(word);
//     }
//     // Reverse the words array
//     let reversedStr = '';
//     for (let i = words.length - 1; i >= 0; i--) {
//         reversedStr += words[i];
//         if (i !== 0) {
//             reversedStr += ' ';  // Add a space between words
//         }
//     }
//     return reversedStr;
// }
// // Example usage
// console.log(reverseWords("I love my India")); // Output: "India my love I"
// console.log(reverseWords("Hello World")); // Output: "World Hello"
// console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"



// Example promises
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'error');
//   });
// // let promise1 = Promise.resolve(3);
// // let promise2 = 42;
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'error');
//   });
//   let promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'error');
//   });
// // let promise3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 100, 'foo');
// // });
// // Using Promise.all
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // Output: [3, 42, "foo"]
// }).catch((error) => {
//   console.log('Promise rejected with error:', error);
// });
// // Using Promise.allSettled
// Promise.allSettled([promise1, promise2, promise3]).then(results => {
//     results.forEach(result => {
//         if (result.status === 'fulfilled') {
//             console.log('Fulfilled:', result.value);
//         } else {
//             console.log('Rejected:', result.reason);
//         }
//     });
// });
// // Using Promise.race
// Promise.race([promise1, promise2, promise3]).then(value => {
//     console.log(value); // The result of the first resolved/rejected promise
// }).catch(error => {
//     console.error(error); // The reason of the first rejected promise
// });
// // Using Promise.any
// Promise.any([promise1, promise2, promise3]).then(value => {
//     console.log(value); // The result of the first resolved promise
// }).catch(error => {
//     console.error('All promises were rejected:', error);
// });

// call, apply and bind
// const person1 = {
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// const person2 = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// // Borrow fullName method from person1
// console.log(person1.fullName.call(person2)); // Output: "John Doe"
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = { name: 'Alice' };
// greet.call(person, 'Hello', '!'); // Output: "Hello, Alice!"
// greet.apply(person, ['Hi', '.']); // Output: "Hi, Alice."
// function sum() {
//     return Array.prototype.reduce.apply(arguments, [(a, b) => a + b, 0]);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10
// function multiply(a, b) {
//     return a * b;
// }
// const double = multiply.bind(null, 2); // Preset `a` to 2
// console.log(double(5)); // Output: 10
// function Counter() {
//     this.count = 0;
//     this.increment = function() {
//         this.count++;
//         console.log(this.count);
//     };
// }
// const counter = new Counter();
// const button = document.getElementById('incrementButton');
// button.addEventListener('click', counter.increment.bind(counter)); // Ensures `this` is bound to `counter`
// const user = {
//     data: [1, 2, 3],
//     showData: function() {
//         console.log(this.data);
//     }
// };
// // Pass method as callback
// setTimeout(user.showData.bind(user), 1000); // Output: [1, 2, 3]
// const mixin = {
//     sayHello: function() {
//         console.log(`Hello, ${this.name}`);
//     }
// };
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, mixin);
// const user = new User('Bob');
// user.sayHello(); // Output: "Hello, Bob"
// function add(a, b) {
//     return a + b;
// }
// const addFive = add.bind(null, 5); // Preset `a` to 5
// console.log(addFive(10)); // Output: 15

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i); }, 1000 + i);
// }
// for (var i = 0; i < 3; i++) {
//     (function (i) {
//         setTimeout(function () { console.log(i); }, 1000 * i);
//     })(i);
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout((function(i) {
//       return function() {
//         console.log(i); // Output: 0, 1, 2
//       };
//     })(i), 1000);
//   }
  

// function foo() {
//     let x = (y = 0);
//     x++;
//     y++;
//     return x;
// }
// console.log(foo());

// (function (x) {
//     (function (y) {
//         console.log(x);
//     }(2));
// }(1));

// console.log(1 + "2" + "2"); // Logs "122"
// console.log(1+ +"2"+"2");
// let num = 1;
// console.log(num++ + "2" + "2"); // "122"
// console.log(++num + "2" + "2"); // "322"
// console.log(1 - "2" + "2");
// console.log(1 - "2" - "2"); // Logs -3
// console.log(1 + "A" + "2"); // Logs "1A2"
// console.log(1 - "A" + "2"); // Logs "NaN2"
// console.log("B" - "A" + "2"); // Logs "NaN2"
// console.log('5' - 3); // 2 (string to number)
// console.log('5' + 3); // "53" (number to string)

// let x = false;
// x ||= true;
// console.log(x); // true
// let y = null;
// y ??= 'default';
// console.log(y); // 'default'
// let z = true;
// z &&= false;
// console.log(z); // false

// if (!false) console.log('falsy'); // falsy
// if (!0) console.log('falsy'); // falsy
// if (!'') console.log('falsy'); // falsy
// if (!null) console.log('falsy'); // falsy
// if (!undefined) console.log('falsy'); // falsy
// if (!NaN) console.log('falsy'); // falsy

// if (true) console.log('truthy'); // truthy
// if (1) console.log('truthy'); // truthy
// if ('non-empty string') console.log('truthy'); // truthy
// if ([]) console.log('truthy'); // truthy
// if ({}) console.log('truthy'); // truthy


//Types of function in javascript:
// Function Declaration
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(2, 3)); // Output: 5
  
//   // Function Expression
//   const subtract = function(a, b) {
//     return a - b;
//   };
//   console.log(subtract(5, 2)); // Output: 3
  
//   // Arrow Function
//   const multiply = (a, b) => a + b;
//   console.log(multiply(2, 3)); // Output: 6

// const person = {
//     name: 'John',
//     greet: function() {
//       const innerFunction = () => {
//         console.log('Hello, ' + this.name); // 'this' refers to the 'person' object
//       };
//       innerFunction();
//     }
//   };
//   person.greet(); // "Hello, John"
  
//   // IIFE
//   (function() {
//     console.log("IIFE executed");
//   })(); // Output: IIFE executed

//Closures:
// function counter() {
//     let count = 0;
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   const increment = counter();
//   console.log(increment()); // Output: 1
//   console.log(increment()); // Output: 2
  

// function fetchData(url) {
//     return function (callback) {
//       fetch(url)
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.error(error));
//     };
//   }
//   const getUserData = fetchData('https://jsonplaceholder.typicode.com/users');
//   getUserData(data => console.log(data));

// Design Pattern:
// Singleton Pattern
// const singleton = (function() {
//     let instance;
//     function createInstance() {
//       return { name: 'Singleton' };
//     }
//     return {ß
//       getInstance: function() {
//         if (!instance) {
//           instance = createInstance();
//         }
//         return instance;
//       }
//     };
//   })();
//   const instance1 = singleton.getInstance();
//   const instance2 = singleton.getInstance();
//   console.log(instance1 === instance2); // Output: true
// Module Pattern
// const Module = (function() {
//     let privateVar = "I am private";
//     function privateMethod() {
//         console.log(privateVar);
//     }
//     return {
//         publicVar: "I am public",

//         publicMethod: function() {
//             privateMethod();
//         }
//     };
// })();
// console.log(Module.publicVar); // Output: I am public
// Module.publicMethod(); // Output: I am private
// Factory Pattern
// class Car {
//     constructor() {
//         this.type = "Car";
//     }
// }
// class Truck {
//     constructor() {
//         this.type = "Truck";
//     }
// }
// class VehicleFactory {
//     createVehicle(vehicleType) {
//         switch (vehicleType) {
//             case "car":
//                 return new Car();
//             case "truck":
//                 return new Truck();
//             default:
//                 throw new Error("Unknown vehicle type");
//         }
//     }
// }
// const factory = new VehicleFactory();
// const car = factory.createVehicle("car");
// const truck = factory.createVehicle("truck");
// console.log(car.type); // Output: Car
// console.log(truck.type); // Output: Truck
// Prototype Pattern
// const carPrototype = {
//     init: function(model) {
//         this.model = model;
//     },
//     getModel: function() {
//         console.log("The model of this car is " + this.model);
//     }
// };
// function Car(model) {
//     function F() {}
//     F.prototype = carPrototype;
//     const f = new F();
//     f.init(model);
//     return f;
// }
// const myCar = new Car("Tesla Model S");
// myCar.getModel(); // Output: The model of this car is Tesla Model S
// Observer Pattern
// class Subject {
//     constructor() {
//         this.observers = [];
//     }
//     addObserver(observer) {
//         this.observers.push(observer);
//     }
//     notifyObservers(message) {
//         for (let observer of this.observers) {
//             observer.update(message);
//         }
//     }
// }
// class Observer {
//     update(message) {
//         console.log("Observer received message:", message);
//     }
// }
// const subject = new Subject();
// const observer1 = new Observer();
// const observer2 = new Observer();
// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.notifyObservers("Hello, Observers!");
// // Output: 
// // Observer received message: Hello, Observers!
// // Observer received message: Hello, Observers!

// function createLargeObjectClosure() {
//     let largeObject = { data: new Array(1000).fill('memory leak') };
//     return function() {
//       console.log(largeObject);
//     };
//   }
//   let leak = createLargeObjectClosure();
//   leak();
//   leak = null; // Preventing memory leak
  
// function createCache() {
//     let cache = {};
//     return function(key, value) {
//       if (value !== undefined) {
//         cache[key] = value;
//       }
//       return cache[key];
//     };
//   }
//   const cache = createCache();
//   cache('name', 'John');
//   console.log(cache('name')); // Output: John
  
// function createCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   const counter = createCounter();
//   console.log(counter()); // Output: 1
//   console.log(counter()); // Output: 2
  
// function createComponent() {
//     let state = {};
//     return {
//       setState(newState) {
//         state = { ...state, ...newState };
//       },
//       getState() {
//         return state;
//       }
//     };
//   }
  
//   const component = createComponent();
//   component.setState({ name: 'Component 1' });
//   console.log(component.getState()); // Output: { name: 'Component 1' }
  
// function createPubSub() {
//     let subscribers = [];
//     return {
//       subscribe(subscriber) {
//         subscribers.push(subscriber);
//       },
//       publish(message) {
//         subscribers.forEach(subscriber => subscriber(message));
//       }
//     };
//   }
  
//   const pubSub = createPubSub();
//   pubSub.subscribe(message => console.log(`Subscriber 1: ${message}`));
//   pubSub.subscribe(message => console.log(`Subscriber 2: ${message}`));
//   pubSub.publish('Hi, Subscribers!'); // Output: Subscriber 1: Hello, Subscribers! Subscriber 2: Hello, Subscribers!
  
// function createRBAC() {
//     let roles = {};
//     return {
//       addRole(role, permissions) {
//         roles[role] = permissions;
//       },
//       canAccess(role, permission) {
//         return roles[role]?.includes(permission) ?? false;
//       }
//     };
//   }
  
//   const rbac = createRBAC();
//   rbac.addRole('admin', ['read', 'write', 'delete']);
//   rbac.addRole('user', ['read']);
  
//   console.log(rbac.canAccess('admin', 'write')); // Output: true
//   console.log(rbac.canAccess('user', 'delete')); // Output: false
  
// function createRouter() {
//     let routes = {};
//     return {
//       addRoute(path, handler) {
//         routes[path] = handler;
//       },
//       navigate(path) {
//         if (routes[path]) {
//           routes[path]();
//         } else {
//           console.log('Route not found');
//         }
//       }
//     };
//   }
  
//   const router = createRouter();
//   router.addRoute('/home', () => console.log('Home Page'));
//   router.addRoute('/about', () => console.log('About Page'));
//   router.navigate('/home'); // Output: Home Page
//   router.navigate('/about'); // Output: About Page
//   router.navigate('/contact'); // Output: Route not found
  
// const draggable = document.getElementById('draggable');
// draggable.addEventListener('dragstart', function(event) {
//   event.dataTransfer.setData('text', event.target.id);
// });

// const dropzone = document.getElementById('dropzone');
// dropzone.addEventListener('dragover', function(event) {
//   event.preventDefault();
// });
// dropzone.addEventListener('drop', function(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData('text');
//   event.target.appendChild(document.getElementById(data));
// });

// // Function Declaration
// greet();
// function greet() {
//   console.log('Hello, World!');
// }
// // Function Expression
// const greet = function() {
//   console.log('Hello, World!');
// };
// greet();

// function higherOrder(fn) {
//     fn();
//   }
//   function sayHello() {
//     console.log('Hello!');
//   }
//   higherOrder(sayHello);

// function greet() {
//     console.log('Hello, ' + this.name);
//   }
//   const obj = { name: 'Alice' };
//   greet.call(obj); // Output: Hello, Alice
//   greet.apply(obj); // Output: Hello, Alice
//   const boundGreet = greet.bind(obj);
//   boundGreet(); // Output: Hello, Alice
  
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
//   console.log(factorial(5)); // Output: 120
  
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   const gen = generator();
//   console.log(gen.next().value); // Output: 1
//   console.log(gen.next().value); // Output: 2
//   console.log(gen.next().value); // Output: 3
  
// let str = 'Hello, World!';
// let index = str.indexOf('World'); // 7
// let exists = str.includes('World'); // true

// let str = 'Hello, World!';
// let sub1 = str.substring(7, 12); // "World"
// let sub2 = str.substr(7, 5); // "World"
// let sub3 = str.slice(7, 12); // "World"

// class Parent {
//     constructor(name) {
//       this.name = name;
//     }
//     greet() {
//       console.log('Hello from Parent');
//     }
//   }
//   class Child extends Parent {
//     constructor(name, age) {
//       super(name);
//       this.age = age;
//     }
//     greet() {
//       super.greet();
//       console.log('Hello from Child');
//     }
//   }
//   const child = new Child('Alice', 5);
//   child.greet(); // Hello from Parent // Hello from Child
  
// Closure memoization
// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//       const key = JSON.stringify(args);
//       if (cache[key]) {
//         return cache[key];
//       } else {
//         const result = fn(...args);
//         cache[key] = result;
//         return result;
//       }
//     };
//   }
//   function slowFunction(num) {
//     for (let i = 0; i < 1e9; i++) {} // Simulate slow computation
//     return num * 2;
//   }
//   const memoizedSlowFunction = memoize(slowFunction);
//   console.log(memoizedSlowFunction(5)); // Slow computation, output: 10
//   console.log(memoizedSlowFunction(5)); // Fast computation, output: 10
// Closure debounce
// function debounce(func, wait) {
//     let timeout;
//     return function(...args) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func.apply(this, args), wait);
//     };
//   }
//   const debouncedLog = debounce(() => console.log('Hello'), 2000);
//   window.addEventListener('resize', debouncedLog);
// Closure throttling
// function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;
//     return function(...args) {
//       if (!lastRan) {
//         func.apply(this, args);
//         lastRan = Date.now();
//       } else {
//         clearTimeout(lastFunc);
//         lastFunc = setTimeout(() => {
//           if (Date.now() - lastRan >= limit) {
//             func.apply(this, args);
//             lastRan = Date.now();
//           }
//         }, limit - (Date.now() - lastRan));
//       }
//     };
//   }
//   const throttledLog = throttle(() => console.log('Hello'), 2000);
//   window.addEventListener('resize', throttledLog);
// Closure memoryleak
// function createLargeObjectClosure() {
//     let largeObject = { data: new Array(1000).fill('memory leak') };
//     return function() {
//       console.log(largeObject);
//     };
//   }
//   let leak = createLargeObjectClosure();
//   leak();
//   leak = null; // Preventing memory leak
// Closure observer
// function createPubSub() {
//     let subscribers = [];
//     return {
//       subscribe(subscriber) {
//         subscribers.push(subscriber);
//       },
//       publish(message) {
//         subscribers.forEach(subscriber => subscriber(message));
//       }
//     };
//   }
//   const pubSub = createPubSub();
//   pubSub.subscribe(message => console.log(`Subscriber 1: ${message}`));
//   pubSub.subscribe(message => console.log(`Subscriber 2: ${message}`));
//   pubSub.publish('Hello, Subscribers!'); // Output: Subscriber 1: Hello, Subscribers! Subscriber 2: Hello, Subscribers!
// Closure shoppingcart
// function createCart() {
//     let items = [];
//     return {
//       addItem(item) {
//         items.push(item);
//       },
//       removeItem(item) {
//         items = items.filter(i => i !== item);
//       },
//       getItems() {
//         return items;
//       }
//     };
//   }
//   const cart = createCart();
//   cart.addItem('Apple');
//   cart.addItem('Banana');
//   console.log(cart.getItems()); // Output: ['Apple', 'Banana']
//   cart.removeItem('Apple');
//   console.log(cart.getItems()); // Output: ['Banana']
  
// Event Handling With The Throttling
// Use a throttle function to limit the number of times an event handler can be invoked.
// function throttle(fn, limit) {
//     let lastCall = 0;
//     return function(...args) {
//       const now = Date.now();
//       if (now - lastCall >= limit) {
//         lastCall = now;
//         fn(...args);
//       }
//     };
//   }
//   window.addEventListener('resize', throttle(function() {
//     console.log('Window resized');
//   }, 5000));
// Event Handling With The Debounce
// Use a debounce function to delay the execution of the event handler.
// function debounce(fn, delay) {
//     let timeout;
//     return function(...args) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => fn(...args), delay);
//     };
//   }
//   window.addEventListener('resize', debounce(function() {
//     console.log('Window resized');
//   }, 200));
  
// Higher Order Function 
// function higherOrder(fn) {
//     fn();
//   }
//   function sayHello() {
//     console.log('Hello!');
//   }
//   higherOrder(sayHello);
// Function Currying
// function add(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
//   const add5 = add(5);
//   console.log(add5(3)); // Output: 8
// Recursive Function
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
//   console.log(factorial(5)); // Output: 120
// Generator Function
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   const gen = generator();
//   console.log(gen.next().value); // Output: 1
//   console.log(gen.next().value); // Output: 2
//   console.log(gen.next().value); // Output: 3
// IIFE Function
// (function() {
//     console.log('IIFE');
//   })();
// Constructor Function
// function Person(name) {
//     this.name = name;
//   }
//   const alice = new Person('Alice');
//   console.log(alice.name); // Output: Alice
// Arguments with function
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       total += arguments[i];
//     }
//     return total;
//   }
//   console.log(sum(1, 2, 3)); // Output: 6
  
// Prototypal Inheritance
// function Parent(name) {
//     this.name = name;
//   }
//   function Child(name, age) {
//     Parent.call(this, name);
//     this.age = age;
//   }
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
//   const person1 = new Person('Alice');
//   const person2 = new Person('Bob');
//   person1.greet(); // Hello, my name is Alice
//   person2.greet(); // Hello, my name is Bob 
// You can prevent an object from being modified using Object.freeze(), Object.seal(), or Object.preventExtensions().
// const obj = { key: 'value' };
// Object.freeze(obj);
// obj.key = 'new value'; // This will not change the value
// console.log(obj.key); // value
// Mixins are a way to add properties and methods from one object to another. They are used to achieve multiple inheritance.
// const canFly = { fly() { console.log('Flying'); } };
// const canSwim = { swim() { console.log('Swimming'); } };
// function createBird() {
//   const bird = {};
//   Object.assign(bird, canFly, canSwim);
//   return bird;
// }
// const duck = createBird();
// duck.fly(); // Flying
// duck.swim(); // Swimming
//Static methods are defined using the static keyword in ES6 classes. They are called on the class itself, not on instances.
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     static greet() {
//       console.log('Hello from Person class');
//     }
//   }
//   Person.greet(); // Hello from Person class
// The super keyword is used to call methods from a parent class in ES6 classes. It can be used in constructors and other methods.
// class Parent {
//     constructor(name) {
//       this.name = name;
//     }
//     greet() {
//       console.log('Hello from Parent');
//     }
//   }
//   class Child extends Parent {
//     constructor(name, age) {
//       super(name);
//       this.age = age;
//     }
//     greet() {
//       super.greet();
//       console.log('Hello from Child');
//     }
//   }
//   const child = new Child('Alice', 5);
//   child.greet(); 
//   // Hello from Parent
//   // Hello from Child

// // Event Deligation
// const itemList = document.getElementById('itemList');
// const addItemButton = document.getElementById('addItemButton');
// itemList.addEventListener('click', function(event) {
//   if (event.target && event.target.matches('li.item')) {
//     console.log('List item clicked:', event.target.textContent);
//   }
// });
// addItemButton.addEventListener('click', function() {
//   addItem('Item ' + (itemList.children.length + 1));
// });
// function addItem(text) {
//   const newItem = document.createElement('li');
//   newItem.className = 'item';
//   newItem.textContent = text;
//   itemList.appendChild(newItem);
// }