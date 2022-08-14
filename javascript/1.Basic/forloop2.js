/*
   for (var i=1; i<=10; i++){
	   console.log("---------" , i , "--------");
	   for (var j=1; j<=5; j++){
		   console.log(" \t    a ")
	   }
   }*/
   
 
   
    for (var i=1; i<=10; i++){
	   console.log("---------" , i , "--------");
	   
	   var mystar="";
	   
	   for (var j=1; j<=i; j++){
		   mystar = mystar +  " ,  ";
	   
	   console.log(mystar);
	   }
   }