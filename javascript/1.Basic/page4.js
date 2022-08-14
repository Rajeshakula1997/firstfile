/*
   The javascript control structure : The control structure use to
     control the flow of data in project
	    1.without register No login
		2.without login No inbox
		3.wrong Password can not transfer money
		4.No money in account then no transaction
		   =>if amount is available then start the loop
		   
		   
   */
   
   
     var a=100;
     var b=100;
	 if ( a>b){
		 console.log("The " , a , "is bigger than ", b);
	      }
	  else{
		 console.log("The " , b , "is bigger than ", a);
		 
	       }
		   
		var c=100;
if (a>b && a>c){
	  console.log("Between " , a , b , c , " The Higher value is : " , a);
}		
  else if ( b>a && b>c){
	  console.log("Between ", a  ,b ,c, "The Higher value is : " , b);
  }
  else{
	  console.log("Between ", a  ,b ,c, "The Higher value is : " , c);
  }
  