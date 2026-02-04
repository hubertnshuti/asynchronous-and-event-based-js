// Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds), it should be aborted.

// https://jsonplaceholder.typicode.com/users

const controller = new AbortController()    //1
const signal = controller.signal    //2

async function fetching(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {signal})    //3
        const data = await response.json()
        return data
    }catch(error){
        if(error.name === 'AbortError'){    //4
            console.log(`User clicked to abort`)
        }
        else
            console.error('Network Error!' + error)
    }
}

fetching()

setTimeout(() =>{
    console.log('We are done with waiting!')
    controller.abort()  //5
},5)

