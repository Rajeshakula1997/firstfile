 var item = [" Java Book" , "Apple","Water","milk","Rice"];
/*
     syntax
         array.map((elemet, index){
            statement;
         })
*/
item.map((itemname, index)=>{
      console.log(index ,"The value is :-", itemname);
})

item.forEach((itemname, index)=>{
      console.log(index ,"forEach() the value is :", itemname);
      
})