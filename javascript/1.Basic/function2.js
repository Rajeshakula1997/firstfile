function one(){
	var a=100;
	var b=200;
	var c=a+b;
	console.log("1- method The addition is:",c);
}
var two =function(){
	var a=100;
	var b=200;
	var c=a+b;
	console.log("2-method The addition is:" , c);
}

 var three=() =>{
	 var a=100;
	var b=200;
	var c=a+b;
	console.log("2-method The addition is:" , c);
	 
 }
 
 one();
 two();
 three();
  console.log("------- Inline Function-----");
  
  var four=()=> console.log("this is from inline..............");
  four();
    
 