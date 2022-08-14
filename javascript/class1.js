class=Mytest{
        constructor (){
		     this.a=100;
			 this.b=200;
		
	 }
    About(){
	   console.log ("About Us");
	} 
	
	Contact(){
	   console.log ("Contact Us");
	} 
	
	Service(){
	   console.log ("Our Services");
	} 
	
	getSum(){
	   console.log (this.a + this.b);
	}
}
  const object = new Mytest();

    object.About();  
    object.Contact();  
    object.getSum();  
	
	
