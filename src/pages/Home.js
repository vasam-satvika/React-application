import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render(){
      
        return(
            <>
           
       <section class="background firstSection">
        <div class="box-main">
            <div class="firsthalf">
                <p class="text-big">HOW HAPPY ARE YOU?</p>
                <p class="text-small">The happiness quotient is a model that makes it easier for people to objectively judge their own happiness on multiple aspects.
                    These aspects are called happiness quotients.</p>
                <div class="buttons">
                    <button class="btn"><Link to='/Users' style={{textDecoration:"none",color:"white"}}>Check MQ </Link></button>
                    
                </div>
            </div>
            <div class="secondHalf">
               <img src="Assets\img\olive.jpg" alt="happiness" ></img>
            </div>
        </div>
    </section>
    <div id="about">
    <section class="section">
       <div class="paras">
        <p class="sectionTag text-big">WHAT'S MQ? </p>
        <p class="sectionSubTag text-small">Mental health wellness is a key component in establishing and maintaining a healthy lifestyle.
             Mental health wellness is just as important as physical and medical health, so it is important to learn 
             strategies to maintain good mental health.

            The definition of mental wellness is the awareness of one’s own ability to cope with stressors of day-to-day life while maintaining the ability to function effectively when socializing, working, learning and taking care of personal health and hygiene. A person that fits the 
            definition of mental wellness has a positive sense of wellbeing and hope, despite daily stressors and challenges. Overall, mental health wellness depends on factors, 
            like self-acceptance, autonomy, quality of relationships, capacity for personal growth, and overall life satisfaction.
        </p>
    </div>
        <div class="thumbnail">
            <img src="Assets\img\mq logo.jpg "alt="happiness" class="imgFluid"></img>
        </div>
    </section>
    <section class="section left">
        <div class="paras">
         <p class="sectionTag text-big">Why Mental wellness is important? </p>
         <p class="sectionSubTag text-small">We live in a country where depression is one of the most underrated and overlooked illness that is often ignored because of the fear of being misunderstood by most of the people. We can’t quash the fact that we all encounter some sort of mental disturbances at some point of time in life when we feel bewildered, confused, deep sorrow and lost. The intensity of these situations is such that we hardly can nullify the importance of mental wellness among children, young groups and adults. Yes, there is no age to be a victim of depression and heart quenching void. There are various ways
          to improve your mental wellness depending on the severity, counselling or psychological consultation being one of them.
        </p>
     </div>
         <div class="thumbnail">
             <img src="Assets\img\balancingstones.jpg"alt="happiness" class="imgFluid"></img>
         </div>
     </section>
    </div> 

    
     <section class="contact" id="contact">
         <h2 class="text-center">Contact Us</h2>
         <div class="form">
         <input type="text" class="form-input" name="name" placeholder="Enter Your Name"></input>
         <input type="text" class="form-input"name="phone" placeholder="Enter Your Phone"></input>
         <input type="text"class="form-input" name="email" placeholder="Enter Your Email"></input>
         <textarea name="text" class="form-input"id="text"cols="47" rows="10" placeholder="Ellaborate your concern"></textarea>
         <button class="btn dark">Submit</button>
        </div>
        </section>
        <footer class="background">
          <div class="text-footer">
          Copyright &copy; 2027 mentalwellness-All rights reserved 
        </div> 
        </footer>
        </>
        );
        
    }

}
export default Home;