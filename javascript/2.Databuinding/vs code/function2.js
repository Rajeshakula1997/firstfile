function one(){
 var a=100;
 var b=200;
 var c=a+b;
 console.log("1-Method The Addition is :", c);

}

 var two= function(){
      var a=100;
      var b=200;
      var c=a+b;
console.log("2-Method The Addition is :" ,c);

 }

 var three =()=>{
   var a=100;
   var b=200;
   var c=a+b;
       console.log("3-Method The Additionis :", c);
 }
 one();
 two();
 three();

 console.log("----Inline Function-----");
    var four = ()=> console.log("The function form inline");

    four();

