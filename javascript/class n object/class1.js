class  Mytest{
        constructor (){
		     this.a = 100;
			 this.b = 200;
		
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

/* 		class :       it is a collections of member function and member variables
    member function : inside a class all the user define functions are member function
	member variable : inside a class, within constructor the variable defined using this operator
	
	constructor : this is pre-defined function of javascript class object. It also called life cycle
					method of javascript oops. It use to define member variable of cclass  
									
	object of class : class it is instance of a class.
	
	 this  : It is object of current class. It work inside of class but not outside of class

	new : It use to create Object a class where new operator use for memory allocation
	
	extends : It use to inherit feature of 1 class to other class during inheritance.

	 */	
	
	
