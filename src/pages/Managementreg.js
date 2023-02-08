import React from 'react';
import {Link} from 'react-router-dom'
class   Managementreg extends React.Component{
    render(){
        
        return(
            <>
            <div id="home" >
    <div class="container background" >
        
            <div class="Login-form">
                  <h2>Management Registration</h2>
            
            <form action="#" method="post">
               <p>School Management</p>
               <input type="text" name="Employee Name" placeholder="Employee Name"></input>
               <p>Employee Id</p>
               <input type="text" name="password" placeholder="Student Id"></input>
               <p>School-name</p>
               <input type="text" name="School-name" placeholder="School-name"></input>
               <p>Password</p>
               <input type="text" name="Role" placeholder="Password"></input>
               
               
               <button class="btn dark" ><Link to='/Result'>Submit </Link></button>
               
              
                    </form> 
            </div>

        </div>
    </div>
    

    </>
    );

        }
    }   
      
export default Managementreg;