import React, {useState} from 'react';

     const Myhook3 = () => {
        const[booklist, updateBook] = useState([ {name : "CSS", price : 200, qty : 10} ]);
        const[bookname, pickName]= useState("");
        const [bookprice, pickPrice]= useState(0);
        const [bookqty, pickQty]= useState(0);
        const [message, updateMessage]= useState("");

        const save =()=>{
          var newbook = {name: bookname, price:bookprice, qty:bookqty};
          updateBook(booklist=>[...booklist, newbook]);
          updateMessage(bookname + " Added Successfully !");
          pickName("");
          pickPrice("4");
          pickQty("");

        }


        const deleteBook = (index, bname) => {
          booklist.splice(index, 1);    // a - b;
          // a= a-b;
          updateBook(booklist => [...booklist] );   // a= a assigning the remining element to state variable
          updateMessage(bname + "  Deleted Successfully !");
      }


       
      return (
        <div className='container mt-4'>
              <div className='row'>
                                                <div className='col-lg-3'>
                                                 
                                                        <div className='card'>
                                                            <div className='card-header bg-primary text-white'> Add Book</div>

                                                            <div className='card-body'>
                                                                   <div className='mb-3'>
                                                                      <label> Book Name</label>
                                                                      <input type="text" className="form-control" onChange={obj=>pickName(obj.target.value)}
                                                                          value={bookname}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Book Price</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickPrice(obj.target.value)}
                                                                       value={bookprice}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Book Qty</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickQty(obj.target.value)}
                                                                       value={bookqty}/>
                                                                   </div>
                                                            </div>

                                                            <div className='card-footer text-center'>
                                                                <button className='btn btn-primary' onClick={save}> Save BOOk </button>
                                                            </div>

                                                        </div>
                                                </div>



                                                
                     <div className='col-lg-9'>
                            <h3 className='text-center'> Available books : {booklist.length} </h3>
                                <p className='text-center'>{message}</p>

                                            <table className='table table-bordered shadow'>
                                                        <thead>
                                                            <tr className='bg-light text-primary'>
                                                                <th> Book Index </th>
                                                                <th> Book Name </th>
                                                                <th> Action </th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                             {
                                                                  booklist.map((book, index) =>{
                                                                    return(
                                                                         <tr key={index}>
                                                                                 <td>{index}</td>
                                                                                 <td>{book.name}</td>
                                                                                 <td>{book.price}</td>
                                                                                 <td>{book.qty}</td>

                                                                            <td>
                                                                                   <button className='btn btn-danger btn-sm' 
                                                                                   onClick={deleteBook.bind(this, index, book.name)}>Remove</button>
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
      )
    
    
    }

    export default Myhook3;