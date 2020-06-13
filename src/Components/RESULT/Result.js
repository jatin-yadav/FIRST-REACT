import React, {Component}  from 'react'
import './result.css'

class Result extends Component {
  render(){
  return (
    <>
  
    
     <div className="container">
        <div className="wrap1">
           <div className="middle"> 
                 <div className="text"><h1><b><i>Score Board</i></b></h1></div>
           </div> 
        </div>        
    </div>
    <div className="wrap2">
        <b><h1>*IPL : 2020*</h1></b>
    </div>
    <div className="teams">
        <div className="first"> 
           <div className="shape">
                <h1>A</h1>
            </div>
          </div>
            
            <div className="compare"> 
                 <b><h1>Vs</h1></b>
            </div>
        <div className="second">
            <div className="shape2">
               <h1>B</h1>
            </div>
        </div>
    </div>
    <div className="score">
         <h1>SCORE OF A :30</h1><h1>SCORE OF B :25</h1>
    </div>
    <div className="wins">
        <h1>Congo!!</h1> <h1>A wins by 5 score</h1>
    </div>
    </>
    )
    
   
}
}
export default Result;
