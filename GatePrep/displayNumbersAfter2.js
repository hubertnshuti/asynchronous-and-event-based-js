//Helper Function(Normal when using async functions)
function sleep(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

async function displayNumber(){
    const startTime = Date.now();
    let number = 1;
    
    while(true){
        console.log(number);
        number++;
        
        await sleep(2000);
        
        if(Date.now() - startTime >= 5000){
            break;
        }
    }
}

displayNumber();