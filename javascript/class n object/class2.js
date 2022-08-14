 class Mytest2{
	 constructor(){
		 this.city = ["Bangalore" , "Mumbai" , "Pune" , "Kolkata" , "Hyderbad"];
		 this.user = ["Ganesh" , "Rajesh" , "Mahesh" , "Mukhesh" ,"Santhosh","rajan","suresh"];
		 
	 }
	 getCity = ()=>{
		 console.log("Available City : "+ this.city.length);
		 this.city.map((cityname , index)=>{
			 console.log(index , this.user[index] , cityname);
		 })
	 }
 }
      const object2 = new Mytest2();
	  object2.getCity();