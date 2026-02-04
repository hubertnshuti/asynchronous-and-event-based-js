function addAsync(a, b, callback){
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

addAsync(3, 4, result => {
    console.log(result);
});
// This will print 7 after a delay of 2 seconds