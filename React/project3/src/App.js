import {React} from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';


import Home from './home';
import Book from './book';
import User from './user';

function App() {
  return(
		<HashRouter>
             <ul>
                 <li> <Link to="/" className='mylink'>Home</Link></li>
                 <li> <Link to="/book" className='mylink'> Book Management </Link></li>
                 <li> <Link to="/user" className='mylink'> User Management </Link></li>
             </ul>
			<Routes>
				   <Route exact path="/" element={<Home/>} /> 
           <Route exact path="/book" element={<Book/>} /> 
           <Route exact path="/user" element={<User/>} /> 
			</Routes>
		</HashRouter>
  )
}
export default App;