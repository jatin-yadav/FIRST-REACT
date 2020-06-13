import React, {Component} from 'react';
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom';
//import Navbar from './Components/NAVBAR/Navbar';
import Home from './Components/HOME/Home';
//import Enterteam from './Components/ENTERTEAM/Enterteam';
import Toss from './Components/TOSS/Toss';
import Play from './Components/Match/Play';
import Result from './Components/RESULTS/Result';
import Instruction from './Components/INSTRUCTIONS/Instruction';
import Enterteams from './Components/ENTERTEAMS/Enterteams'
class App extends Component{
render(){
  return(
    <BrowserRouter>
    <div className='App'>

    
    <Route exact path="/" component={Home}/>
    
    <Route path="/Enterteams" component={Enterteams}/>
    <Route path="/Toss" component={Toss}/>
    <Route path="/Match" component={Play}/>
    <Route path="/Result" component={Result}/>
    <Route path="/Instruction" component={Instruction}/>
       
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
