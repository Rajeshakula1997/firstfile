const Login = () =>{
    
    
   return(
   <div id="login">
       <div  className="container text-center m-4">
         
           <h1> This is login page :</h1>   
          
           <div>
							  <label> Enter Name :</label> &nbsp; &nbsp; &nbsp;
							  <input type="text" placeholder="Enter name" class="col-lg-2"/>
							  </div>
 <br/>
                              <div>
							  <label> Enter password :</label>
							  <input type="password" placeholder="Enter password" class="col-lg-2"/>
							  </div>

                              <div class="justify-content-center m-4">
        <button type="button" class="btn btn-primary">Login</button>
      </div>

           </div>
           </div>
   )
}

  export default Login;