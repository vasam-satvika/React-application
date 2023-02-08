import React from 'react';
import {Link} from 'react-router-dom'
class Users extends React.Component{
    render(){
      
        return(
            <>
       
  
<div class="row">
  <div class="column">
    <div class="card" >
      <img class="imgcard" src="assets\img\student_avatar.jpg" alt="Student" ></img>
  
 <p><button class="btncard"><Link to="/Studentreg">Student</Link></button></p>
</div>
  </div>

  <div class="column">
    <div class="card" >
      <img class="imgcard" src="assets\img\parent_avatar.jpg" alt="Parent" ></img>
  
 <p><button class="btncard"><Link to="/Parentreg">Parent</Link></button></p>
</div>
  </div>
  
  <div class="column">
    <div class="card">
      <img class="imgcard" src="assets\img\teacher_avatar.jpg" alt="Teacher" ></img>
  
 <p><button class="btncard"><Link to="/Teacherreg">Teacher</Link></button></p>
</div>
  </div>
  <div class="column">
    <div class="card" >
      <img class="imgcard" src="assets\img\Managment_avatar.png" alt="Management" ></img>
  
 <p><button class="btncard"><Link to="/Managementreg">Management</Link></button></p>
</div>
  </div>
  <div class="column">
    <div class="card">
      <img class="imgcard" src="assets\img\Accredator_avatar.png" alt="Accredator"></img>
  
 <p><button class="btncard"><Link to="/Accredator">Accredator</Link></button></p>
</div>
 </div>
 </div>
 
        </>
    );
}
}
export default Users;
