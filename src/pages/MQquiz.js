import React from 'react';
import {Link} from 'react-router-dom'
class MQquiz extends React.Component{
    render(){
        
        return(
            <>
         
    { <>
    
        <p class=" Qtext-big">MQ QUIZ? </p>
      
    <div class="Login-form">
        <p class=" text-big">MQ QUIZ? </p>
      
      
       <p> 1.Are you satisfied with your school infrastructure </p>
       <ul class="MQquizoptions">
                    <li>
                        <input type="radio" name="answer" id="ans1" class="answer"></input>
                        <label for="ans1" id="option1">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans2" class="answer"></input>
                        <label for="ans2" id="option2">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans3" class="answer"></input>
                        <label for="ans3" id="option3">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans4" class="answer"></input>
                        <label for="ans4" id="option4">Answer option</label>
                    </li>
                </ul>
             
              <br></br>
              <p> 2.Are you satisfied with your school infrastructure </p>
          <ul class="MQquizoptions">
                    <li>
                        <input type="radio" name="answer" id="ans1" class="answer"></input><br></br>
                        <label for="ans1" id="option1">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans2" class="answer"></input>
                        <label for="ans2" id="option2">Answer option</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="ans3" class="answer"></input>
                        <label for="ans3" id="option3">Answer option</label>
                    </li>
                    <li class="MQquizli">
                        <input type="radio" name="answer" id="ans4" class="answer"></input>
                        <label for="ans4" id="option4">Answer option</label>
                    </li>
                </ul>
                <br></br>
                <button class="btn dark"><Link to='/Response'>Next</Link></button> 
                </div>
</>
     }
    
     
            </>    );
    }
    }
        
        
      
export default MQquiz;