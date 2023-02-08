import React from 'react';
import {Link} from 'react-router-dom'
class Accredatorreg extends React.Component{
    render(){
        
        return(
            <>
            <div class="Login-form">
                <h2>Accrediaton Page</h2>
                <div class="link">
                 <ul>
                    <li><Link to='/Result'>CHECK MQ </Link></li>
                    <li><Link to='/Top10'>TOP 10 SCHOOLS</Link></li>
                 </ul>
                </div>
            </div>
           
            </>
    );
    }
    }
        
        
      
export default Accredatorreg;