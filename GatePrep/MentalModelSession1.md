1. **What does asynchronous JavaScript mean and at it’s core fundamental, how is it achieved in JavaScript?**
→ ****Asynchronous javascipt simply means code that can start a task and move on without waiting for that task to finish
→This prevents blocking the main thread since js is single threaded
→We can acheive asynchronous js through the event loop that manages asynchronous codes, callback functions that return the successfull asynchronous task after they finished excecution, promises a modern approach that appraoch asynchronus taks and lastely async and await that is a syntatic sugar over promises that makes async code look synchronos

2. **What is a callback function in JavaScript, and how is it used in asynchronous programming?**
→A callback function is a function that passed as an argument to another function to later be involked or excecuted when a certain operation is complete
→So we use them in asynchronus programming to handle tasks that take time 

    1. **What are the potential drawbacks of using callbacks for handling asynchronous operations?**
    →When we have asynchrons operations that depend on each other then that would lead us to callback hell (Pyramid of Doom)a situation where our codes begin to look like piramid so this is very hard to catch error, hard to read and debug (verbose code)
    
3. **Difference between concurrency and parallelism programming paradigms?**
→Concurrency is the ability of a system to handle multiple tasks at the same time conceptually
The tasks may not be run simultaneously, but the system can switch between them so it looks like they are happning at the same time
Example
Async and await or Promises are perfect example becase they can start a tasks and move on to other tasks and come back when that is finihsed all these may feel like everything is happeneing at the same time yet it is not
→Parallelism is the ability of a system to run multiple tasks litertally at the same time
This requires multiple processos and cores
Example
True parallelism happens only with web worker because the main thread is single threaded

4. **How can you convert a callback-based function to a promise-based function?**
→We wrap the function inside a promise() and resolve or reject it based on the callback result
→Then we can use the .then and .catch to handle the result output 

5. **What is promise chaining?**
This is when you connect multiple .then()calls one after the other, where each .then returns a new promise and the output of one becames the input of the next

    1. **What is the difference between resolved, settled, rejected, and fulfilled promise states?**
    Resolved - when a promise a promise has recieved its final output which is either rejected or resolved 
    rejected - When a promise has failed
    fullfilled - When a promise completes successfull
    settled - when a promise finishes excecution the result is on either side of success or fail but not both and the state can never be changed after that 
    
6. **What is the return type of the `.then()` function?**
The return type of .then is always a promise
Even if we return a normal value inside .then then it will always wrap it inside a promise

    1. **How can you define a thenable?**
    This is any object that has the .then() method, even if its not a real promise
    
7. **What does the `async` keyword do when applied to a function?**
Async always makes the function return a promise, so we can say it wraps a function into a promise

    1. **What are some alternatives or workarounds to use `await` at the top level in JavaScript?**
    So we cannot use await outside an async function but there are other walk arounds developers use 
    →Using an immedialey invoked async function(llfe)
    →use top level wait (supported in ES modules) if we are in a module (.mjs or type”module” in package.json)
    so that will work in modern broweser and node.js
    ****
8. **What is AJAX and why is it important if so?**
Asynchronous JavaScript and XML 
This are techiques that allows a web page to send and receive data from a server in the background without reloding the entire page
→asynchronous communication
→no full page reload or page shutdown
→so it overall make web application faster and more interactive and able to update a specific part of the ui dynamically

9. **What is an API endpoint?** 
An api endpoint is a specific URL on a server where a client can send a request and get data back as vice versa they can send data aswell
Types can be GET, POST, PUT & DELETE

10. **How many states can an `XMLHttpRequest` object have and what are they?**
0 - unsent - the xhr object is created but not yet called
1 - open - when the open() object method has been called and now we can call send() but the request is not sent
2 - header_received - The server recives the request
3 - loading - the broweser recieving the data from the server, response is being downlaoded
4 - done - the entire response has been received
****
11. **What is an event loop?**

12. **How does  a `forEach()` and `map()` or `for...of` behave with promises?**
ForEach() → takes in an iterable
                  →it doesn care about the promise
                  →it runs synchronously for each element
                  →even if we use await inside forEach it wont wait for the pause
                  →it doesnt wait for fetch to complete before moving to the next iteration

map()       →takes in an iterable
                 →nothing is acctaully resolved yet, so just an array of promises
                 →it will wait for all of them to with Promise.all
                 →so this will run parallel and the result contains all the json objects

for…of      →for…of works perfectly with await
                 →iterations runs sequentially, not in parallel
                 →furst url fetch, finishes then next url
                 →so it preserves the order where one fetch has to finish before the other one can start fetching

13. **What is the difference between microtasks and macrotasks in the context of the event loop?**
Microtasks are tasks that are taken by the event listener when the callback stack is empty before the macro tasks such as promise
Macro are tasks that are taken by the event loop all the micoro tasks are done such as setTimeput and interval
So the order is like this 
run all synchronous code and finish
run all micro tasks in the queue
run one macotaks as the cycle goes like that

     **a. How does queueMicrotask work**
queueMicrotask lets you schedule a function to run at the end of the current tasks but before any macrotasks
its a creative and very fast promise callback without acctaully using a promise

14. Predict the output of the following code

```jsx

Promise.resolve()
.then(() => console.log(1));

queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();
```

1. What will this code of block give?

```jsx
// A promise 
const nums = [1, 2, 3, 4, 5];

const promise = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 200);
  });
};
```

```jsx
// Consuming the promise using forEach loop
function display(numbers) {
  numbers.forEach(async (num) => {
    const dis = await promise(num);
    console.log(dis);
  });
}

display(nums);
```

```jsx
// Consuming the promise using for...loop
async function display(nums) {
    for (const num of nums) {
        const dis = await promise(num)
        console.log(dis)
    }
}

display(nums);
```