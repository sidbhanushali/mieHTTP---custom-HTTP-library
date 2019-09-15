const newReq = new mieHTTP;

 newReq.getReq('https://jsonplaceholder.typicode.com/users').then(data=>console.log(data))
 .catch(err=>console.log(err));


// create user data to send thru fetch http lib. 

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "woah woah ",
    "email": "Sincere@april.biz"

}



const updatedUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "disfat--bidge",
    "email": "Sincere@april.biz"

}


// CREATE NEW USER by NEW POST REQ USING CUSTOM Lib
newReq.postReq('https://jsonplaceholder.typicode.com/users', user)
    .then(data => console.log(data))
    .catch(err => console.log(err));




//UPDATE POST thru PUT
newReq.putReq('https://jsonplaceholder.typicode.com/users/3', updatedUser)
    .then(data => console.log(data))
    .catch(err => console.log(err));


//DELETE THE POST 
newReq.deleteReq('https://jsonplaceholder.typicode.com/users/2')
    .then((data) => console.log(data))
    .catch(err => console.log(err));

