import React from 'react';
import '../index.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function Blog(){
    return(
        <div>
            <h1>Blog</h1>
            <Link to='/problemboard'>
                <button>Problem Board</button>
            </Link>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h2>10/2/22</h2>
            <p>Currently I am below AIME level, not really started my research project, and USACO bronze level.<br />
            Cant wait to see what happens the rest of the year.
            </p>
        </div>
    );
}
export default Blog;