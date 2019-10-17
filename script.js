// const userList = document.getElementById('userList');

// const users = myFunction();
// const usersArray = users.then(data => data.users).then(value => render(value))

// console.log(usersArray);
const myFunction = async()=> {
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/users');
    const json = await response.json(); // convert response to JSON data; .json() also needs the await keyword

    const userList = json.users;
    console.log(userList);
    const userArray = userList.map(data => `
    <div>${data.firstName}</div>
    <div>${data.lastName}</div>
    <div>${data.email}</div>
    <div>${data.title}</div>
    `).join('');
    document.querySelector('#usersList').innerHTML = userArray
    //userList.innerHTML = userArray;
}

myFunction();



// const render = (arr) =>{
//     let html = arr.map(user => {
//         `<div class=userContainer>

//         <div>
//         ${user.firsName}
//         </div>
//         <div>
//         ${user.lastName}
//         </div>
//         <div>
//         ${user.email}
//         </div>
//         <div>
//         ${user.title}
//         </div>

//         </div>        `
//     });
//     userList.innerHTML = html;
//     console.log(html);
// }

// render(usersArray);

//const users = myFunction();
//const users = json;
// const usersArray = users.then(data => data.users); //.then(value => render(value));