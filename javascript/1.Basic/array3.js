var item=[
     {category:"Books", product:["Html", "Css", "JS"]},
    {category:"Mouse", product:["Dell", "Index"]},
    {category:"Laptop", product:["Lenovo", "HP", "Dell"]},
   {category:"Desktop", product:["Dell", "Wipro"]},
	{category:"Mobile", product:["Samsung"]}
    
];
 
  for(var i=0; i<item.length; i++){
	  console.log( " =>",item[i].category);
	 
	  
	  for(var j=0; j<item[i].product.length; j++){
		  console.log(" ===>", item[i].product[j]);

	  }
  }
