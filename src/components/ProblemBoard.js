import React from 'react';
import '../index.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function ProblemBoard(){
    return(
        <div>
            <h1>ProblemBoard</h1>
            <Link to='/blog'>
                <button>Blog</button>
            </Link>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <p>Currently empty...</p>
        </div>
    );
}
export default ProblemBoard;