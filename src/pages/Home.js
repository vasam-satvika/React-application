import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
class Home extends React.Component{
    render(){
      
        return(
            <>
           
       <section className="background firstSection">
        <div className="box-main">
            <div className="firsthalf">
                <p className="text-big">HOW HAPPY ARE YOU?</p>
                <p className="text-small">The happiness quotient is a model that makes it easier for people to objectively judge their own happiness on multiple aspects.
                    These aspects are called happiness quotients.</p>
                <div className="buttons">
                    <button className="btn"><Link to='/Users' style={{textDecoration:"none",color:"white"}}>Check MQ </Link></button>
                    
                </div>
            </div>
            <div className="secondHalf">
               <img src="Assets\img\olive.jpg" alt="happiness" ></img>
            </div>
        </div>
    </section>
    <div id="about">
    <section className="section">
       <div className="paras">
        <p className="sectionTag text-big">WHAT'S MQ? </p>
        <p className="sectionSubTag text-small">Mental health wellness is a key component in establishing and maintaining a healthy lifestyle.
             Mental health wellness is just as important as physical and medical health, so it is important to learn 
             strategies to maintain good mental health.

            The definition of mental wellness is the awareness of one’s own ability to cope with stressors of day-to-day life while maintaining the ability to function effectively when socializing, working, learning and taking care of personal health and hygiene. A person that fits the 
            definition of mental wellness has a positive sense of wellbeing and hope, despite daily stressors and challenges. Overall, mental health wellness depends on factors, 
            like self-acceptance, autonomy, quality of relationships, capacity for personal growth, and overall life satisfaction.
        </p>
    </div>
        <div className="thumbnail">
            <img src="Assets\img\mq logo.jpg "alt="happiness" className="imgFluid"></img>
        </div>
    </section>
    <section className="section left">
        <div className="paras">
         <p className="sectionTag text-big">Why Mental wellness is important? </p>
         <p className="sectionSubTag text-small">We live in a country where depression is one of the most underrated and overlooked illness that is often ignored because of the fear of being misunderstood by most of the people. We can’t quash the fact that we all encounter some sort of mental disturbances at some point of time in life when we feel bewildered, confused, deep sorrow and lost. The intensity of these situations is such that we hardly can nullify the importance of mental wellness among children, young groups and adults. Yes, there is no age to be a victim of depression and heart quenching void. There are various ways
          to improve your mental wellness depending on the severity, counselling or psychological consultation being one of them.
        </p>
     </div>
         <div className="thumbnail">
             <img src="Assets\img\balancingstones.jpg"alt="happiness" className="imgFluid"></img>
         </div>
     </section>
    </div> 

    
     <section className="contact" id="contact">
         <h2 className="text-center">Contact Us</h2>
         <div className="form">
         <input type="text" className="form-input" name="name" placeholder="Enter Your Name"></input>
         <input type="text" className="form-input"name="phone" placeholder="Enter Your Phone"></input>
         <input type="text"className="form-input" name="email" placeholder="Enter Your Email"></input>
         <textarea name="text" className="form-input"id="text"cols="47" rows="10" placeholder="Ellaborate your concern"></textarea>
         <button className="btn dark">Submit</button>
        </div>
        </section>
        <footer className="background">
          <div className="text-footer">
          Copyright &copy; 2027 mentalwellness-All rights reserved 
        </div> 
        </footer>
        </>
        );
        
    }

}
export default Home;
