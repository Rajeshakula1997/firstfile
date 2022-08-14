import React,{useEffect, useState} from "react";
import PublicHeader from "./header";


const Cart = () =>{
    const[product, updateProduct] = useState([]);

    const getCart = () => {
        fetch('http://localhost:1234/cart')
        .then(Response => Response.json())
        .then(allproduct =>{
            if(allproduct.length >0){
                updateProduct(allproduct);
            }
        })
    }

    useEffect (() =>{
        getCart();
    },[true]);

    const [message, updateMessage]= useState("");
    const deleteCard = (pid)=> {
      const postData = {
        method:'DELETE',
        headers:{ 'Content-Type' : 'application/json' },
        body: JSON.stringify({"id":pid})
      };

       var url = "http://localhost:1234/cart/"+pid;
       fetch(url, postData)
       .then(response=> response.json())
       .then(serverResponse=>{
        updateMessage( "Delete from Cart");
        getCart();

       })
    }


    return(
     <>
       <PublicHeader/>
        <section className="bg-light p-5">
                   <p className="text-center text-danger">{message}</p>
            <div className="container">
                <div className="row">

                               <div className="col-lg-3"></div>
                               <div className="col-lg-9">
                                      <h3 className="text-center"> My Cart Items</h3>
                                    <table className="table table-borderded shadow">
                                                <thead>
                                                    <tr>
                                                        <th> Cart Id </th>
                                                        <th> Item name</th>
                                                        <th>price </th>
                                                        <th> photo </th>
                                                        <th> Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        product.map((pinfo, index) =>{
                                                            return(
                                                                <tr key={index}>
                                                                    <td> {pinfo.id}</td>
                                                                    <td> {pinfo.name}</td>
                                                                    <td> {pinfo.price}</td>
                                                                    <td> <img src={pinfo.photo} height="50" width="70"/></td>

                                                                    <td>
                                                                        <button onClick={deleteCard.bind(this, pinfo.id)}
                                                                      className="btn btn-danger btn-sm">
                                                                        <i className="fa fa-trash"></i>
                                                                      </button>
                                                                      </td>

                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                    </table>
                                
                               </div>

                </div>
            </div>
        </section>
       </>
    )

}

export default Cart;