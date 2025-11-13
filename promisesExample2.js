const userLeft = false
const userWatchingCatMeme = false       

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

// ADD UNFINISHED CODE HERE
