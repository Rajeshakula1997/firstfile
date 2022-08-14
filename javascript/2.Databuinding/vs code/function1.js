function one() {
      var a=100;
      var b=200;
      var c= a+b;
      console.log("The Addition is : ", c);
}

one(); // here we are calling the function one for final output
one();
one();

function two(a=0, b=0){
  var c=a+b;
  console.log(a, b, "The Addition is :", c);
  console.log("-------");

}
two(100, 100);
two(200, 300);
two(400, 500);