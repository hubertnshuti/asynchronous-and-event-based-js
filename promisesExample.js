let p = new Promise((resolve,reject) => {
    let a = 1 + 1
    if(a == 1)
        resolve('success')
    else
        reject('failed')
})

p.then(message=>{
    console.log(`this is in then ${message}`)
}).catch(message =>{
    console.log(`this is in catch ${message}`)
})