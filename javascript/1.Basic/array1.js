/*
    var a= "Mango";
    var b= "Banana";
    var c= "Orange";
    var d= "Milk";
	
	var item =["Mango" , "Banana" , "Orange" , "Milk"];
	
	arrayNames[ index-position] => Element
	
	item[0] => Mango
	item[1] => Banana
	item[2] => Orange
	item[3] => Milk
	
	index -> Location of element
	Element -> The value
	
	*/
	
	var item =["Mango" , "Banana" , "Orange" , "Milk"];
	   console.log(item.length );
	   
	  console.log(item [0] );             // how to get 1st element of arrey
  console.log(item [item.length-1]);      // how to get last element of arrey	

// how to print all elements of arrey   
     for (var i=0; i<item.length; i++){
		 console.log (i, "===>" , item[i]);
	 }
	 
// how to print the array element in reverse order
   for (var i=item.length-1; i>=0; i--){
	   console.log(i, "===>" , item [i]);
   }

var city="Bangalore";
    for( var i=0; i<city.length; i++){
		console.log(i, "<=" , city[i]);
	}
  
	 