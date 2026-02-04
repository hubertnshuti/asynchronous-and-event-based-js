function divideAsync(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b == 0){
                reject(new Error('Cannot divide by zero'))
            } else {
                resolve(a / b)
            }
        }, 2000)
    })
}

divideAsync(10, 2).then(result => {
    console.log(result)
}, err => console.log(err.message));