// Write a JavaScript program that converts this callback-based function to a promise-based function.

// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Data fetched successfully!";
//       callback(null, data);
//     }, 1000);
//   }
  
//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log(data);
//     }
//   });

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'This is some data'
            if(!data){
                reject(new Error('No Data!!'))
            }
            resolve(data)            
        }, 1000)
    })
}

fetchData()
.then(response => {console.log(response)})
.catch(err => {console.log(err)})





