// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used

// // getFastPosts() code here...

// getFastPosts().then((posts) => {
//     console.log(posts)
// })


async function fetchOne(url){
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('HTTP request failed: ' + response.status)
    }    

    const promise = await response.json()
    return promise
}


function getFastPosts(){
    const URLS = [
        'https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',
        'https://jsonplaceholder.typicode.com/posts'
    ]

    const promises = URLS.map(url => fetchOne(url))

    return Promise.any(promises)
}

getFastPosts()
    .then(post => {
        console.log(post)
    })
    .catch(err => {
        console.log(err)
    })
