const Mybook = () =>{
	 const book = ["HTML", "css", "javaScript", "java", "node","react"];
	 
	return(
	    <div>
		    <h1> { book.length } - Book List </h1>
			<p> Book is working </p>
			
			{
				book.map((name,index)=>{
					return( 
					<p key={index}> {name} </p>
					)
				})
			}
			
			</div>
	)
}
 
   export default Mybook;