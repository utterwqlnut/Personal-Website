import React from 'react';
import '../index.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to='/problemboard'>
                <button>Problem Board</button>
            </Link>
            <Link to='/blog'>
                <button>Blog</button>
            </Link>
            <h2>About me</h2>
            <p>I am a high school student at alpharetta high school. <br />Looking to pursue math and computer science over high school. <br />
            I am involved in robotics, science/engineering fair, USACO, and Math competitions.
            </p>
        </div>
    );
}
export default Home;