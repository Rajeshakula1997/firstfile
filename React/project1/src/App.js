import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; 

import Myuser from './Basic/user.js';
import Mybook from './Basic/book.js';
import ItemList from './Basic/item.js';
import Myproduct from './Basic/product.js';
import Myhook1 from './hooks/hook1.js';
import Myhook2 from './hooks/hook2.js';
import Myhook3 from './hooks/hook3.js';
import Myhook4 from './hooks/hook4.js';
import Myhook5 from './hooks/hook5.js';
import Assign from './hooks/assignment.js';
import Api1 from './Api/api1.js';
import Api2 from './Api/api2.js';
import Userlist from './Api/userlist.js';
import Newuser from './Api/newuser.js';
import Edituser from './Api/edituser.js';
import Myapi3 from './Api/api3.js';
import Myapi4 from './Api/api4.js';


const Home = () => <h1> Welcome Home </h1>; 

function App() {
  return (
     <HashRouter>
            <ul className="mynav">
                <li> <Link to="/" className="mylink">My Home</Link></li>
                <li> <Link to="/userlist" className="mylink">User</Link> </li>
                <li> <Link to="/booklist" className="mylink">Books</Link></li>
                <li> <Link to="/itemlist" className="mylink">Items</Link></li>
                <li> <Link to="/productlist" className="mylink">Product</Link></li>
                <li> <Link to="/hook1" className="mylink">Hook1</Link></li>
                <li> <Link to="/hook2" className="mylink">Hook2</Link></li>
                <li> <Link to="/hook3" className="mylink">Hook3</Link></li>
                <li> <Link to="/hook4" className="mylink">Hook4</Link></li>
                <li> <Link to="/hook5" className="mylink">Hook5</Link></li>
                <li> <Link to="/assign" className="mylink">Assig</Link></li>
                <li> <Link to="/api1" className="mylink">Api-1</Link></li>
                <li> <Link to="/api2" className="mylink">Api-2</Link></li>
                <li> <Link to="/user" className="mylink">Userlist</Link></li>
                <li> <Link to="/api3/null/null/null" className="mylink">Api-3</Link></li>
                <li> <Link to="/api4" className="mylink">Api-4</Link></li>
                
            
            </ul>
            <Routes>
                         <Route exact path ="/" element ={<Home /> } />
                          <Route exact path ="/userlist" element ={ <Myuser /> } />
                          <Route exact path ="/booklist" element ={ <Mybook /> } />
                          <Route exact path ="/itemlist" element ={ <ItemList /> } />
                          <Route exact path ="/productlist" element ={ <Myproduct /> } />
                          <Route exact path ="/hook1" element ={ <Myhook1 /> } />
                          <Route exact path ="/hook2" element ={ <Myhook2 /> } />
                          <Route exact path ="/hook3" element ={ <Myhook3 /> } />
                          <Route exact path ="/hook4" element ={ <Myhook4 /> } />
                          <Route exact path ="/hook5" element ={ <Myhook5 /> } />
                          <Route exact path ="/assign" element ={ <Assign /> } />
                          <Route exact path ="/api1" element ={ <Api1 /> } />
                          <Route exact path ="/api2" element ={ <Api2 /> } />
                          <Route exact path ="/user" element ={ <Userlist /> } />
                          <Route exact path ="/newuser" element ={ <Newuser /> } />
                          <Route exact path ="/edituser/:userid" element ={ <Edituser /> } />
                          <Route exact path ="/api3/:name/:city/:age" element ={ <Myapi3 /> } />
                          <Route exact path ="/api4" element ={ <Myapi4 /> } />

                          


                  </Routes>
     </HashRouter>
  );
}

export default App;
 