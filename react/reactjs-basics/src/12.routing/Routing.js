import React, { Component } from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import StudentApi from '../11.api-calls/StudentApi';
import UserApi from '../11.api-calls/UserApi';

const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const About =() => <div  className="container"><h1>About US</h1></div>
const Contact =() => <div  className="container"><h1>Contact US</h1></div>
const Error =() => <div  className="container"><h1>Please Contact Administrator</h1></div>

function Routing(){
    return(
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">MERN Stack</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/student" className="nav-item nav-link active">Students</Link>
                            <Link to="/user" className="nav-item nav-link">Users</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/student' element={<StudentApi />}></Route>
                <Route path='/user' element={<UserApi />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing