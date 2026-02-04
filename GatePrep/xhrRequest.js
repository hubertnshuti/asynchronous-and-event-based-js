// Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.

// function myFetch(){
//     //... your code here
// }

function myFetch(url) { 
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer lsksljgha');

    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
        } else {
            reject(new Error('Server Error: ' + xhr.status));
        }
    };

    xhr.onerror = function() {
      reject(new Error('Network Error!'));
    };

    xhr.send();
  });
}

// Usage
myFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log("Success:", res))
    .catch(err => console.log(err));


















































