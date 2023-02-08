import React from 'react';
import {Link} from 'react-router-dom'
class   Parentreg extends React.Component{
    render(){
        
        return(
            <>
            <div id="home" >
    <div class="container background" >
        
            <div class="Login-form">
                <h2>Parent Registration</h2>
            
                    <form action="#" method="post">
                       <p>Parent Name</p>
                       <input type="text" name="Parent's Name" placeholder="Parent Name"></input>
                       <p>Student Id</p>
                       <input type="text" name="password" placeholder="Student Id"></input>
                       <p>School-name</p>
                       <input type="text" name="School-name" placeholder="School-name"></input>
                       <p>Password</p>
                       <input type="text" name="Role" placeholder="Password"></input>
                       
                       

                       <button class="btn dark"><Link to='/MQquiz'>Submit</Link></button> 
                       
              
                    </form> 
            </div>

        </div>
    </div>
    

    </>
    );

        }
    }   
      
export default Parentreg;