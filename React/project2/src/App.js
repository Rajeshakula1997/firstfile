import React from 'react';
//{Component} (this word place in between above React and from)
//import {FaAddressBook, FaBook, FaHome, FaLock, FaPortrait, FaServicestack} from "react-icons/fa";
//  <FaHome/> <FaBook/> ....................
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; 

import MyHome from './basic/home.js';
import About from './basic/about.js';
import Contact from './basic/contact.js';
import Profile from './basic/profile.js';
import Service from './basic/service.js';
import Login from './basic/login.js';

import Userlist from './api/userlist.js';
import Newuser from './api/newuser.js';
import Edituser from './api/edituser.js';

import Productlist from './api/productlist.js';
import Newproduct from './api/newproduct.js';
import Editproduct from './api/editproduct.js';



import Booklist from './api/booklist.js';
import Newbook from './api/newbook.js';
import Editbook from './api/editbook.js';


import Clientlist from './api/clientlist.js';
import Newperson from './api/newperson.js';
import Editperson from './api/editperson.js';

 

function App() {
  return (
     <HashRouter>
            <ul className="mynav">
                
                <li> <Link to="/homelist" className="mylink"><i className='fa fa-home'></i>Home</Link> </li>
                <li> <Link to="/aboutlist" className="mylink"><i class="fa-solid fa-info"></i>About Us</Link></li>
                <li> <Link to="/contactlist" className="mylink"><i class="fa-solid fa-square-phone"></i>Contact Us</Link></li>
                <li> <Link to="/profilelist" className="mylink"><i class="fa-solid fa-user"></i>Profile</Link></li>
                <li> <Link to="/servicelist" className="mylink"><i class="fa-solid fa-headphones"></i>Service</Link></li>
                <li> <Link to="/loginlist" className="mylink"><i class="fa-thin fa-address-book"></i>Login</Link></li>

                <li> <Link to="/userlist" className="mylink">User List</Link></li>

                <li> <Link to="/productlist" className="mylink">Product List</Link></li>

                <li> <Link to="/booklist" className="mylink">Book List</Link></li>

                <li> <Link to="/clientlist" className="mylink">Client List</Link></li>

            </ul>
            <Routes>
                       
                          <Route exact path ="/homelist" element ={ <MyHome /> } />
                          <Route exact path ="/aboutlist" element ={ <About /> } />
                          <Route exact path ="/contactlist" element ={ <Contact /> } />
                          <Route exact path ="/profilelist" element ={ <Profile /> } />
                          <Route exact path ="/servicelist" element ={ <Service /> } />
                          <Route exact path ="/loginlist" element ={ <Login /> } />

                          <Route exact path ="/userlist" element ={ <Userlist /> } />
                          <Route exact path ="/newuser" element ={ <Newuser /> } />
                          <Route exact path ="/edituser/:userid" element ={ <Edituser /> } />

                          <Route exact path ="/productlist" element ={ <Productlist /> } />
                          <Route exact path ="/newproduct" element ={ <Newproduct /> } />
                          <Route exact path ="/editproduct/:productid" element ={ <Editproduct /> } />
                         
                          
                          <Route exact path ="/booklist" element ={ <Booklist /> } />
                          <Route exact path ="/newbook" element ={ <Newbook /> } />
                          <Route exact path ="/editbook/:bookid" element ={ <Editbook /> } />
                          

                          <Route exact path ="/clientlist" element ={ <Clientlist /> } />
                          <Route exact path ="/newperson" element ={ <Newperson /> } />
                          <Route exact path ="/editperson/:personid" element ={ <Editperson /> } />
                         
                  </Routes>
     </HashRouter>
  );
}

export default App;
 