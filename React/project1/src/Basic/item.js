import React from "react";

const itemlist = [
      {name : "Apple", price:300, qty :10},
      {name : "Graphs", price:100, qty :25}       
        ];

const ItemList =()=>{
      
      return(
            <div className="container">
                   <h1> Total item : {itemlist.length} </h1>
                  <table className="table table-bordered">
                        <thead>
                              <tr>
                                    <th>item Name </th>
                                    <th>item Price </th>
                                    <th>item Quantity </th>
                                    <th>Total price</th>
                              </tr>
                        </thead> 
                        <tbody>
                              {
                                    itemlist.map((item, index)=>{
                                          return(
                                              <tr key={index}>
                                                           <td> {index} </td>
                                                          <td>{item.name}</td> 
                                                          <td>{item.price}</td> 
                                                          <td>{item.qty}</td>                                
                                                        <td>{item.qty * item.price}</td>   


                                              </tr>   
                                          )

                                         
                                    })
                              }

                        </tbody>
                  </table>
            </div>
      )

}
  export default ItemList;