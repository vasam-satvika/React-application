import React from 'react';
import {Link} from 'react-router-dom'
class Result extends React.Component{
    render(){
      
        return(
            <>
           
    
    <div id="about">
    <p class="Response text-big">Mental Wellness Quotient</p>
    <p class="Response text-big">75</p>
    <section class="sectionResult">
       
       
        <p class="sectionSubTag text-small">
            <ul>
            <br></br>
                <li class='MQquizoptions'>
                       The Average Mental Quotient of Students is MQ
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       The Average Mental Quotient of Teachers is MQ
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       The Average Mental Quotient of Parents is MQ
                </li>
                

            </ul>
        </p>
    
        <div class="thumbnail">
            <img src="Assets\img\BarGraph.png "alt="happiness" class="imgFluid"></img>
        </div>
    </section>
    <p class="Response text-big"> Student Reveiw</p>
    <section class="sectionResult">
        

         <div class="thumbnail">
             <img src="Assets\img\linegraph.webp"alt="happiness" class="imgFluid"></img>
             <p class="sectionSubTag text-small">
             <ul>
            <br></br>
                
                <li class='MQquizoptions'>
                       Infrastructure :B
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Faculty: A
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Extracuricular: D
                </li>

            </ul>
            </p>
         </div>
     </section>
     <p class="Response text-big"> Teacher Reveiw</p>
    <section class="sectionResult">
        <div class="paras">
        
         
     </div>
         <div class="thumbnail">
             <img src="Assets\img\Graph.jpg"alt="happiness" class="imgFluid"></img>
             <ul>
            <br></br>
                
                <li class='MQquizoptions'>
                       Infrastructure :B
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Faculty: A
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Extracuricular: D
                </li>

            </ul>
         </div>
     </section>
     <p class="Response text-big"> Parent Reveiw</p>
    <section class="sectionResult">
        <div class="paras">
        
         <p class="sectionSubTag text-small"></p>
     </div>
         <div class="thumbnail">
             <img src="Assets\img\Graph.jpg"alt="happiness" class="imgFluid"></img>
             <ul>
            <br></br>
                
                <li class='MQquizoptions'>
                        Safety :B
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Evaluation: A
                </li>
                <br></br>
                <li class='MQquizoptions'>
                       Enviromnent: D
                </li>

            </ul>
         </div>
     </section>
    </div> 
    <footer class="background">
          <div class="text-footer">
          Copyright &copy; 2027 mentalwellness-All rights reserved 
        </div> 
        </footer>
    
     
        </>
        );
        
    }

}
export default Result;