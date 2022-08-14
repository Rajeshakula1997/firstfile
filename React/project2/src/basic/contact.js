const Contact = () =>{
   
    
   return(
    <div className="container text-center m-4">
    <h1> This is Contact  page :</h1>   
   
    <div>
                       <label> Full Name :</label> &nbsp; &nbsp; &nbsp;
                       <input type="text" placeholder="Enter name" class="col-lg-2"/>
                       </div>
                       <br/>

                       <div>
                       <label> Mobile No. :</label> &nbsp; &nbsp;
                       <input type="number" placeholder="Enter mobile no" class="col-lg-2"/>
                       </div>
<br/>
                       <div>
                       <label>Email Id :</label> &nbsp; &nbsp; &nbsp; &nbsp;
                       <input type="email" placeholder="Enter email id" class="col-lg-2"/>
                       </div>

                       <div class="justify-content-center m-4">
 <button type="button" class="btn btn-success">Submit</button>
</div>

    
    </div>
   )
}

  export default Contact;