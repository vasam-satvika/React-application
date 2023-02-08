import React from 'react';
import {Link} from 'react-router-dom'
class Header extends React.Component{
    render(){
        
        return(
            <>
            
    <nav class="navbar background h-nav-resp">
        <ul class="nav-list v-class-resp">
            <div class="logo"><img src="Assets\img\mq logo.jpg" alt="MWQ"></img></div>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="rightNav v-class-resp">
            
            <button class="btn btn-sm"><Link to='/Users'>LOGIN</Link></button>
        </div>
        <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
    </>
    );
    }
    }
        
        
      
export default Header;