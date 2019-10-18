
const myFunction = async()=> {
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/users');
    const json = await response.json(); // convert response to JSON data; .json() also needs the await keyword

    const userList = json.users;
    
    const userArray = userList.map(data => `
    <div class='userListRows'>
    <div>${data.firstName}</div>
    <div>${data.lastName}</div>
    <div>${data.email}</div>
    <div>${data.title}</div>
    </div>
    `).join('');
    document.querySelector('#usersList').innerHTML = userArray

}

myFunction();