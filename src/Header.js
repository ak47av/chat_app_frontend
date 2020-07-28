import React from "react";
import {Link} from 'react-router-dom';

function Header() {

  function loggingout(){
    localStorage.removeItem('temp-jwt');
    localStorage.removeItem('roomname');
  }


  return (
    <header>
     <h1 className='nav-title'>Couplera</h1>
      
      
      <nav>
        <ul className='nav-link'>
         <Link to='/'><li>Home</li></Link>
         <Link to='/chatbox'><li>Chat</li></Link> 
         <Link to='/event'><li>Events</li></Link> 

        </ul>
      </nav>
       <Link to='/login'><button  onClick={loggingout} className='nav-button'>Logout</button></Link>
    </header>
  );
}

export default Header;
