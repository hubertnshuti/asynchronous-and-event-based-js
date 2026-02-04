function divideAsync(a, b, callback){
    setTimeout(() => {
        if(b == 0){
            callback(new Error("Cannot divide by zero"), null)
        }else
            callback(null, a / b)
    }, 2000)
}

divideAsync(10, 0, (err, result) => {
    if(err){
        console.log(err.message)
    } else {
        console.log(result)
    }
});