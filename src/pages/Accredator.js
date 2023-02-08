import React from 'react';
import {Link} from 'react-router-dom'
class Accredator extends React.Component{
    render(){
        
        return(
            <>
             <div class="Login-form">
                <h2>Accredator Registration</h2>
            
                    <form action="#" method="post">
                       <p>Accredator Id</p>
                       <input type="text" name="Accredator Id" placeholder="Accredator Id"></input>
                       <p>State-Name</p>
                       <input type="text" name="password" placeholder="State-Name"></input>
                       <p>School-name</p>
                       <input type="text" name="School-name" placeholder="School-name"></input>
                       <p>School-Id</p>
                       <input type="text" name="School-name" placeholder="School-Id"></input>
                       <p>Password</p>
                       <input type="text" name="Role" placeholder="Password"></input>
                       
                       
                       <button type="submit"><Link to='/Accredatorreg'>Register</Link></button>
                       
              
                    </form> 
            </div>
            </>
            
               
         
    );
    }
    }
        
        
      
export default Accredator;