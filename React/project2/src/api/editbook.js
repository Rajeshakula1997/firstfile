import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const Editbook =() => {
    const[id, pickId] = useState("");
    const[title, pickTitle] = useState("");
    const[author, pickAuthor] = useState("");
    const[edition, pickEdition] = useState("");
    const[price, pickPrice] = useState("");
 
    const[message, updateMessage] =useState("");
    const {bookid} = useParams();

    const getDetails=()=>{
        var url = "http://localhost:1234/book/"+bookid;
        fetch(url)
        .then(Response => Response.json())
        .then(bookinfo=>{
            pickId(bookinfo.id);
            pickTitle(bookinfo.title);
            pickAuthor(bookinfo.author);
            pickEdition(bookinfo.edition);
            pickPrice(bookinfo.price);
        })
    }

    useEffect(() =>{
        getDetails();
    },[1]);


    const save =() =>{
        var bookDetails = {
            "id":id,
            "title":title,
            "author":author,
            "edition":edition,
            "price":price
           
        };

        const postData = {
            method: "PUT",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(bookDetails)
        };

        fetch('http://localhost:1234/book/'+bookid, postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
          
            updateMessage("Data Save Successfully !");
            window.location.href='#/booklist';
           // pickId("");
            //pickTitle("");
           // pickAuthor("");
           // pickEdition("");
           // pickPrice("");
            
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
           
					<div className="col-lg-10 offset-1">
						<div className="row">
							         <h3> {bookid} : Enter Book Details </h3>
                                     <p> {message}</p>

                                        <div className="col-lg-4">
                                        <label className="m-1">Book ID :</label>
                                            <select className="form-select" onChange={obj=>pickId(obj.target.value)} value={id}>
                                    <option>Choose ID </option>
                                    <option>BL001 </option>
                                    <option>BL002 </option>
                                    <option>BL003 </option>
                                    <option>BL004 </option>
                                    <option>BL005 </option>
                                    <option>BL006 </option>
                                    <option>BL007 </option>
                                    <option>BL008 </option>
                                    <option>BL009 </option>
                                    <option>BL010 </option>
                                    
                                    
                                    </select> 
                                        </div>

							<div className="col-lg-4 ml-4">
								<label className="m-1">Book Title :</label>
								<input type="text" className="form-control" placeholder="Enter Required Book Name"
                                onChange={obj=>pickTitle(obj.target.value)} value={title}/>
							</div>

							<div className="col-lg-4">
								<label className="m-2">Author :</label>
								<input type="text" className="form-control" placeholder="Enter Required Author Name"
                                onChange={obj=>pickAuthor(obj.target.value)} value={author}/>
							</div>

                            <div className="col-lg-4">
								<label className="m-1">Edition :</label>
								<select className="form-select" onChange={obj=>pickEdition(obj.target.value)} value={edition}>
                                    <option>Choose Edition </option>
                                    <option>01 </option>
                                    <option>02 </option>
                                    <option>03 </option>
                                    <option>04 </option>
                                    <option>05 </option>
                                    <option>06 </option>
                                    <option>07 </option>
                                    <option>08 </option>
                                    <option>09 </option>
                                    <option>10 </option>

                                    
                                    
                                    </select> 
							</div>

                            <div className="col-lg-4">
								<label className="m-1">Price :</label>
								<input type="number" className="form-control"
                                onChange={obj=>pickPrice(obj.target.value)} value={price}/>
							</div>

                           

							
                            
                            <div className="text-center">
                                <br/>
                            <br/>
                            <button className="btn btn-primary" onClick={save}> Save Book </button>
                        </div>
							
							
            </div>
            </div>
            </div>
            </div>
        
                        
    )
}

export default Editbook;