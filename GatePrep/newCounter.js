// Create a counter function that counts from 1 to 5, with a 1-second delay between each number. The function should return a promise that resolves with an array of all the numbers when counting is complete. This tests your ability to create async flows with timing and collect results over time.
// Requirements:
// Function asyncCounter() counts 1, 2, 3, 4, 5
// 1-second delay between each number
// Return promise that resolves with [1, 2, 3, 4, 5]
// Use async/await or promise chaining

// let count = 0
// let result = []
// function asyncCounter(){
//     return new Promise((resolve, reject) => {
//         const intervalId = setInterval(() => {
//             count++
//             result.push(count)
//             console.log(count)
//             if(count === 5){
//                 clearInterval(intervalId)
//                 resolve(result)
//             }
//         }, 1000)
        
//     })
// }

// async function run(){
//     console.log("Starting..")
//     const finalArray = await asyncCounter();
//     console.log("Done now.")
// }

// run()






// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function asyncCounter() {
//     const results = [];

//     for (let i = 1; i <= 5; i++) {
//         await sleep(1000);
//         results.push(i);
//         console.log(i);
//     }

//     return results;
// }

// asyncCounter().then(finalArray => {
//     console.log("Complete:", finalArray);
// });











// const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));}

// async function asyncCounter(){
//     let results = []
    
//     for(const i=1; i<=5; i++){
//         await sleep(1000)
//         results.push(i)
//         console.log(i)
//     }

//     return results
// }

// asyncCounter().then(array =>{console.log(array)})
// .catch(err => {console.log(err)})








const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function asyncCounter(){
    const results = []

    for(let i = 1; i <= 5; i++){
        await sleep(1000)
        results.push(i)
        console.log(i)
    }

    return results
}

asyncCounter().then(finalArray => {
    console.log(finalArray)
})




