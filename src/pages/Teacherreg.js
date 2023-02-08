import React from 'react';
import {Link } from 'react-router-dom'
class Accredatorreg extends React.Component{
    render(){
        
        return(
            <>
            <div class="Login-form">
                <h2>Teacher Registration</h2>
            
                    <form action="#" method="post">
                       <p>Teacher Name</p>
                       <input type="text" name="Teacher Name" placeholder="Teacher Name"></input>
                       <p>Teacher Id</p>
                       <input type="text" name="password" placeholder="Student Id"></input>
                       <p>School-name</p>
                       <input type="text" name="School-name" placeholder="School-name"></input>
                       <p>Password</p>
                       <input type="text" name="Role" placeholder="Password"></input>
                       
                       
                       <button class="btn dark"><Link to='/MQquiz'>Submit</Link></button> 
                       
              
                    </form> 
            </div>
            </>
    );
    }
    }
        
        
      
export default Accredatorreg;