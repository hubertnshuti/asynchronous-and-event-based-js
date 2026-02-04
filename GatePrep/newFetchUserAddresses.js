// Write a function usersAddresses that fetches users from this endpoint https://jsonplaceholder.typicode.com/users and returns just the addresses of the first 3 users.
// // The output should look like this
// [
//   {
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     }
//   },
//   {
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: [Object]
//     }
//   },
//   {
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: [Object]
//     }
//   }
// ]

async function usersAddresses(){
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url)
    if(!response.ok) throw new Error('Server Response Error: ' + response.status)

    const data = await response.json()

    return data.slice(0,3)
}

console.log(usersAddresses())