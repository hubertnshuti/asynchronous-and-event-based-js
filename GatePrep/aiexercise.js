// Create a function using Promise.allSettled that fetches these three items. It should return a summary telling us which ones loaded and which ones failed, allowing the page to render "partially."

// Promise 1: Resolves "User Profile Loaded"

// Promise 2: Rejects "Weather Service Down"

// Promise 3: Resolves "Stocks Loaded"

async function fetchOne(url){
    const res = await fetch(url)
    if(!res.ok) throw new Error(`${url} down`)
    return await res.json()
}

async function fetchVaryData(){
    const url1 = 'url1'
    const url2 = 'url2'
    const url3 = 'url3'

    const results = await Promise.allSettled([fetchOne(url1), fetchOne(url2), fetchOne(url3)])

    return results
}

fetchVaryData().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
