var item=["java book" , "Apple" , "Water" ,"Milk" , "Rice"];

/*  syntax 
array.map((element , index){
statement;
 }     )

*/

 item.map((itemname , index) =>{
	 console.log(index ," The value is :",itemname);
	
 } )
 
   item.forEach(( itemname,index)=>{
	   console.log(index, "forEach() The value is : ", itemname);
   })