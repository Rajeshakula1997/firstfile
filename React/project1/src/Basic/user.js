function Myuser(){
	 const userinfo={
              name:"Siya ram",
		  education:"MCA",
		  mobile:"984800000",
		  city:"Bangalore",
		  age:"36 years",
		  address:"Marathahalli Bangalore"

	 };
	return(
		<div className="container">
		    <h1> Use Details </h1>
			<table className="table table-striped table-bordered">
                          <tbody>
					<tr><td>Full Name</td><td>{userinfo.name}</td></tr>
					<tr><td>Education</td><td>{userinfo.education}</td></tr>
					<tr><td>Mobile No.</td><td>{userinfo.mobile}</td></tr>
					<tr><td>City</td><td>{userinfo.city}</td></tr>
					<tr><td>Age</td><td>{userinfo.age}</td></tr>
					<tr><td>Address</td><td>{userinfo.address}</td></tr>


				  </tbody>

				</table>
			</div>
 	)
}

 export default Myuser;