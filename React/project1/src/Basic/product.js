import React from 'react';
const productlist = [
      {
            category : "Books",
            product : [ "html", "css", "react", "node"]
      },
      {
            category : "Food",
            product : [ "Water", "Milk", "Rice", "Roti"]
      }
];

 const Myproduct = ()=>
 {
        return(
            <div className="container">
                  <h1> Nesterd Arrey & Neststed Map </h1>
                  {
                        productlist.map((pinfo, index )=>{
                          return(
                               <div key ={index}>
                                     <h4>{pinfo.category}</h4>
                                     {
                                            pinfo.product.map((pname, index2)=>{
                                                return(
                                                      <p key={index2}> {pname}</p>
                                                )
                                            })
                                          }
                                     </div>
                          )
                          })
                  }
                   
            </div>
        )
 }
 export default Myproduct;
