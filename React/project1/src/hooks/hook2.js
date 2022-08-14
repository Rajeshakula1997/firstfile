import React, {useState}from 'react';

const Myhook2 = () => {
      const[booklist, updateBook] = useState(["Java", "Node", "Angular", "HTML", "CSS", "React"]);
      const[newbook, pickBook] = useState("");
      
      const save = () => {
           updateBook( booklist => [...booklist, newbook] );    //booklist = booklist + newbook
           pickBook("");
        }



            const deleteBook = (index) => {
                booklist.splice(index, 1);    // a - b;
                // a= a-b;
                updateBook(booklist => [...booklist] );   // a= a assigning the remining element to state variable
            }
    
         return(
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-3'>
                            <h3> Add New Item </h3>
                            <label> Enter Item Name </label>
                            <input type="text" className="form-control" onChange={obj=>pickBook(obj.target.value) }
                                value={newbook}/>

                            <button className='=btn btn-primary mt-3' onClick={save}> Save book </button>
                            </div>
                            


                        <div className='col-lg-6'>
                            <h3 className='text-center'>Book List : {booklist.length}</h3>
                            <p className='text-center'> {newbook} </p> 
                           <table className='table table-bordered'>
                                <thead>
                                    <tr className='bg-light text-primary'>
                                        <th> Book Index </th>
                                        <th> Book Name </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        booklist.map((bookname, index)=>{
                                          return( <tr key={index}>
                                            <td> {index}</td>
                                            <td> {bookname}</td>
                                            <td> <button className='btn btn-danger' onClick={deleteBook.bind(this,index)}>Delete</button></td>
                                            </tr>
                                          )
                                        }
                                        )
                                    }
                                </tbody>

                           </table>
                    </div>
                </div>
            </div>
         )

}

export default Myhook2;