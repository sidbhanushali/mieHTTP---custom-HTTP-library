const customreq = new mieHTTP;

    const posts = customreq.get('https://jsonplaceholder.typicode.com/todos/1', function(cbresponse) {
        console.log(cbresponse);
        
    });

//create the data to post 
const mydata = {
    userId: 1,
    title: "hi there, this was'posted' to a server. since this a fake REST api server, it just sends our data back to us. we know that we sent successfully the data because they sent ours back with an id of 101 we dodnt add that " ,
    completed: true
}


//create custom post req 
customreq.post('https://jsonplaceholder.typicode.com/posts', mydata, function (cbresponse) {
    console.log(cbresponse);
    
});




//updated data to use for put request 
const updatedData = {
    userId: 1, 
    title: 'THIS POST GOT UPDATED BOI',
    completed: true,
}


//update post with a http put request from the library
customreq.put('https://jsonplaceholder.typicode.com/posts/5', updatedData, function(cbresponse){

console.log(cbresponse);

});


// delete post 
customreq.delete('https://jsonplaceholder.typicode.com/posts/1', updatedData, function (cbresponse) {

    console.log(cbresponse);

}); 

