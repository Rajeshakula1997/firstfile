import React,{useState, useEffect} from "react";

const Api1 = () => {
    const[itemlist, updateItem] = useState([]);

    const getItem = () => {
        fetch("item.json")
        .then( Response => Response.json() )
        .then(itemArray =>{
           updateItem(itemArray);
        })
    }
  



    const[userlist, updateUser] = useState([]);
    const getUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(userArray=>{
            if (userArray.length>0){
                updateUser(userArray);
            }
        })
    }

    const [commentlist, updatComment] = useState([]);
    const getComment = () =>{
         
          fetch("https://jsonplaceholder.typicode.com/comments")
          .then(Response => Response.json())
        .then(commentArray=>{
            if (commentArray.length>0){
                updatComment(commentArray);
            }
    }
        )
}
    useEffect(() => {
        getUser();
        getComment();

    }, [1]);
 
 
    const[booklist, updateBook] = useState([]);
    const getbook = () => {
        fetch("book.json")
        .then( Response => Response.json() )
        .then(bookArray =>{
           updateBook(bookArray);
        })
    }


    return(
        <div className="container mt-4">
            <div className="row">
                
                <div className="col-lg-4">
                    <h3> Read data from json file</h3>
                    <button onClick={getItem} className="btn btn-danger m-3"> Save Item </button>
                    <p> Total Item are : {itemlist.length}</p>

                    {
                        itemlist.map((itemname, index) =>{
                            return(
                                <p key= {index}> {index} #  {itemname}</p>
                            )
                        })
                    }
                </div>

                <div className="col-lg-4">
                    <h3> Read data from json file</h3>
                    <button onClick={getbook} className="btn btn-danger m-3"> Save Item </button>
                    <p> Total Item are : {booklist.length}</p>

                    {
                        booklist.map((bookname, index) =>{
                            return(
                                <p key= {index}> {index} #  {bookname}</p>
                            )
                        })
                    }
                </div>

                <div className="col-lg-4">
                    <h3> total user :{userlist.length} </h3>
                    {
                        userlist.map((user, index) =>{
                            return(
                                <p key={index}> {user.name}</p>
                            )
                        })
                    }
                </div>
            </div>
       
        <div className="row mt-4 bg-primary">
                        <h3 className="col-lg-12 "> Comment List From API : {commentlist.length}</h3>
                        {
                            commentlist.map((comment, index) => {
                                return(
                                    <p key={index}> {comment. name} </p>
                                )
                            })
                        }

        </div>
         </div>
    )

                    }
export default Api1;