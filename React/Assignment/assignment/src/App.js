import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; 

import Assignment from './assignment.js';

const Home = () => <h1> Welcome Home </h1>; 

function App() {
  return (
    <HashRouter>
    <ul className="mynav">

        <li> <Link to="/assignment">Assignment</Link></li>
    
    </ul>
    <Routes>
                
                  <Route exact path ="/assignment" element ={ <Assignment /> } />

          </Routes>
</HashRouter>
  );
}

export default App;
 