var item=[
     {category:"Books", product:["Html", "Css", "JS"]},
    {category:"Mouse", product:["Dell", "Index"]},
    {category:"Laptop", product:["Lenovo", "HP", "Dell"]},
   {category:"Desktop", product:["Dell", "Wipro"]},
	{category:"Mobile", product:["Samsung"]}
    
];
  item.map((iteminfo,pos)=>{
	  console.log(pos , "" , iteminfo.category);
	  
	  iteminfo.product.forEach((name , index)=>{
		  console.log("     " , index , " * " , name);
	  })
	  console.log("---------------------");
  })