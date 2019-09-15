/** 
 *  mieHTTP Library, making HTTP requests easy as pie!
 * 
 * using fetch api and promises
 * 
 * @version: mieHTTP 2.0.0
 * @author: Siddharth Bhanushali 
 * @license: MIT 
 * 
 * 
 * 
**/



class mieHTTP {
    
    //NO CONSTRUCTOR NEEDED BECAUSE NOT USING .THIS OR PROTOTYPE INHERITANCE 

    //Make an HTTP get request
    getReq(url) {

        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));


        });
    //end GetReq func
    }


    //Post request function - takes a url and the data u wanna send as the request 
    postReq(url, data){
        return new Promise((resolve, reject )=>{
                //making a post request thru fetch api requires this object as the second arguement
            fetch(url, {method:'POST',
                         headers:{'Content-type': 'application/json'},
                         body: JSON.stringify(data)

        },)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));




            //END NEW PROMISE   
        });

        //end postReq func
    }



    //PUT request - (similar to post because both request data to be send) 

    putReq(url, data) {
        return new Promise((resolve, reject) => {
            //making a put request thru fetch api requires this object as the second arguement
            fetch(url, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(data)

            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));




            //END NEW PROMISE   
        });

        //end putReq func
    }


    //DELETE METHOD 
    deleteReq(url) {
        return new Promise((resolve, reject) => {
            //making a put request thru fetch api requires this object as the second arguement
            fetch(url, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                //dont need a body to json stringify cos no data to send
            })
                .then(response => response.json())
                //noo need to pass data, in the .then parameter since nothing being returned 
                .then(()=> resolve('No data to display data deleted...'))
                .catch(err => reject(err));




            //END NEW PROMISE   
        });

        //end deleteReq func
    }





//end class mieHTTP 
}
    

          



    






