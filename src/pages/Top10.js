import React from 'react';
import Sampledata from "../sample.json"
class Top10 extends React.Component{
    render(){
        
        return(
            <>
            
    

    <section class="section ">
       <div class="paras">
        <p class="sectionTag text-big">Top 10 Schools in Country </p>
        <p class="sectionSubTag text-small">
          <table >
            <thead>
        <tr>
        <th scope="col">Rank</th>
        <th scope="col">Name</th>
       
       
            </tr>
            </thead>
            <tbody>
            {
            Sampledata.map( (record) => {
                let id=record.id;
                let Rank =record.sno;
                let name =record.name;
                
               
                return (<tr key={id}><td>{Rank}</td><td>{name}</td></tr>);
            })
            }
            </tbody>

          </table> </p>
          
          
    </div>
    
        <div class="thumbnail">
            <img src="assets\img\mq logo.jpg "alt="happiness" class="imgFluid"></img>
        </div>
    </section>
    <br></br>
    <hr></hr>
    <section class="section">
      <div class="paras">
       <p class="sectionTag text-big">Top 10 schools in state </p>
       <p class="sectionSubTag text-small">
       <table >
            <thead>
        <tr>
        <th scope="col">Rank</th>
        <th scope="col">Name</th>
       
       
            </tr>
            </thead>
            <tbody>
            {
            Sampledata.map( (record) => {
                let id=record.id;
                let Rank =record.sno;
                let name =record.name;
                
               
                return (<tr key={id}><td>{Rank}</td><td>{name}</td></tr>);
            })
            }
            </tbody>

          </table>

        </p>
   </div>
       <div class="thumbnail">
           <img src="assets\img\pie_charts.jpg "alt="happiness" class="imgFluid"></img>
       </div>
   </section>
   <br></br>
   <footer class="background">
          <div class="text-footer">
          Copyright &copy; 2027 mentalwellness-All rights reserved 
        </div> 
        </footer>
 
            </>
    );
    }
    }
        
        
      
export default Top10;