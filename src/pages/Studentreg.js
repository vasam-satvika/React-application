import React from 'react';
import {Link} from 'react-router-dom'
class Studentreg extends React.Component{
    render(){
        
        return(
            <>
            <div class="Login-form">
                <h2>Student Registration</h2>
            
                    <form action="#" method="post">
                       <p>User Name</p>
                       <input type="text" name="user" placeholder="User Name"></input>
                       <p>Student Id</p>
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
        
        
      
export default Studentreg;