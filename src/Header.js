import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Header=()=>{
  const [auth,setAuth]=useState('');
  const [user,setUser]=useState('');
  const [Logout,setLogout]=useState('');
  const [Login,setLogin]=useState('');
  let navigate =  useNavigate();
  useEffect(()=>{
    var userName = localStorage.getItem('username');
    // var auth = localStorage.getItem('email');
    
    setUser(userName);
    if(userName===null){
      var logout='';
      var login= 'Login';
    }
    else{
      var login='';
      var logout='Logout';
    }
    setLogin(login)
    setLogout(logout)
    // setWelcome(welcome);
  },
  [])
  const LogOut=()=>{
    localStorage.removeItem('username');
    // localStorage.removeItem('email');
    navigate(`/login`);
    
  }
  
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">ADMIN PAGE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/register" class="nav-link">Register</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" class="nav-link">{Login}</Link>
      </li>
    </ul>
    <span class="navbar-text">
        <Link to='' onClick={LogOut}>{Logout}</Link>
    </span>
  </div>
</nav>
    )
}

export default Header;