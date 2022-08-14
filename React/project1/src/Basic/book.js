const Mybook = () =>{
	 const book = ["HTML", "css", "javaScript", "java", "node","react"];
	 
	return(
	    <div className="container">
		    <h1 class="text-center"> { book.length } - Book List </h1>
			<p class="text-center"> Book is working </p>
			
			{
				book.map((name,index)=>{
					return( 
					<p class="text-center"> {name} </p>
					)
				})
			}
			
			</div>
	)
}
 
   export default Mybook;