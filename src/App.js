import './index.css'
import React from 'react';
import Home from './components/Home'
import Blog from './components/Blog'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import ProblemBoard from './components/ProblemBoard';
function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/problemboard" element={<ProblemBoard />}/>
            </Routes>
        </Router>
    );
}
export default App;