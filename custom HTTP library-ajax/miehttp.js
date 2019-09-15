
/**
 * mieHTTP Library, making HTTP requests easy as pie!
 *
 * using ES-5 prototype methods
 *
 * @version: mieHTTP 1.0.0
 * @author: Siddharth Bhanushali
 * @license: MIT
 *
 *
 **/



function mieHTTP(){
    this.httpReq = new XMLHttpRequest; 

}

// GET REQEST


// passes a url so the user can make a requst to any website by simply calling the function name and the prototype method

// use a callback in the prototype method - otherwhys the page will load before the data can be retrived
mieHTTP.prototype.get = function(url, callback) {
    this.httpReq.open('GET',url, true);
    // for an xml.onload check for status 200
    this.httpReq.onload = ()=> {
        if(this.httpReq.status===200){
            callback( this.httpReq.responseText);
            //if its not 200, callback resp the error code
        } else {
            callback(`Error: ${this.httpReq.status}`);
        }
    }

    // dont forget to send the xml reqest
    this.httpReq.send();
 
}



//create a way to do HTTP POST Request 

//takes the users requested url to post their data to, the users data, and the callback for aync behavior
mieHTTP.prototype.post = function (url, data, callback) {

    this.httpReq.open('POST', url, true);

    //set the content type thru the header! 
    this.httpReq.setRequestHeader('Content-type', 'application/json')

    this.httpReq.onload = () => {
        //since this is a fake server, the post request action result is pretty much a get response with your post at the end of the data 
       callback(this.httpReq.responseText);
        // checking for any errors
        if (this.httpReq.status === 200) {
            callback(this.httpReq.responseText);
            //if its not 200, callback resp the error code
        } else {
            callback(`Error: ${this.httpReq.status}`);
        }
    }
    
    // dont forget to send the xml reqest, this time with the DATA!! - the data will be a regular jS object so send it as a JSON string!
    this.httpReq.send(JSON.stringify(data));

    
}



//create a way to do an HTTP PUT request
mieHTTP.prototype.put = function (url, data, callback) {

    this.httpReq.open('PUT', url, true);

    //set the content type thru the header! 
    this.httpReq.setRequestHeader('Content-type', 'application/json')

    this.httpReq.onload = () => {
        //since this is a fake server, the post request action result is pretty much a get response with your post at the end of the data 
        callback(this.httpReq.responseText);
        // checking for any errors
        if (this.httpReq.status === 200) {
            callback(this.httpReq.responseText);
            //if its not 200, callback resp the error code
        } else {
            callback(`Error: ${this.httpReq.status}`);
        }
    }

    // dont forget to send the xml reqest, this time with the DATA!! - the data will be a regular jS object so send it as a JSON string!
    this.httpReq.send(JSON.stringify(data));


}




// HTTP delete request! 
mieHTTP.prototype.delete = function(url, data, callback){

    this.httpReq.open('DELETE', url, true);

    this.httpReq.setRequestHeader('Content-type', 'application/json')

    this.httpReq.onload = () =>{
        if (this.httpReq.status===200) {
            callback(`post deleted heres ur empty object -> ${this.httpReq.responseText}`)
        } else {
            callback(`error something went wrong. HTTP status code: ${this.httpReq.status}`)
        }

    }

    //make sure to send the data as a JSON format 
    this.httpReq.send(JSON.stringify(data));
}



