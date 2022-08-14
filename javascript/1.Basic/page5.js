
  var input = 88888;
      /* isNaN - is not a number */
	
  if (isNaN( input) ){
	  console.log(input ," is string and length is : " , input.length);  
  }else{
	  console.log(input ," is number :");  
	  if (input %2==0){
		  console.log( "The " , input , " is even No.");
	  }else{
		  console.log( "The " , input , " is odd No.");
	  }
  }