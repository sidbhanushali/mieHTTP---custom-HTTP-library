/** 
 * mieHTTP Library, making HTTP requests easy as pie!
 * 
 * using the fetch API with async, await 
 * 
 * @version: mieHTTP 3.0.0 
 * @author: Siddharth Bhanushali   
 * @license: MIT
 * 
 * 
 **/



class mieHTTP {

    //NO CONSTRUCTOR NEEDED BECAUSE NOT USING .THIS OR PROTOTYPE INHERITANCE 

    //Make an HTTP get request - using ASYNC
    async getReq(url) {
        //the await acts as a resolve or as a .then
        const response = await fetch(url)
        const respData = response.json();
        
        //return
        return respData;
       
        //end GetReq func
    }


    //Post request function - takes a url and the data u wanna send as the request 
    async postReq(url, data) {
        
            //making a post request thru fetch api requires this object as the second arguement
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)

            })
                
             
            const respData = await response.json();
            return respData;


         
       

        //end postReq func
    }



    


    //PUT request - (similar to post because both request data to be send) 

    async putReq(url, data) {
        
            //making a put request thru fetch api requires this object as the second arguement
           const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)

            })
                
            const respData = await response.json(); 
            return respData; 
 

        //end putReq func
    }


    //DELETE METHOD 
   async deleteReq(url) {
        
          const response = await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                //dont need a body to json stringify cos no data to send
            })
              
           const respData = await `resorce deleted empty object -> ${response.json()}`
            return respData;
            
            
        //end deleteReq func
    }





    //end class mieHTTP 
}
