import React, { Component } from 'react'
import './Toss.css'
import {Route} from 'react-router-dom';
import Play from '../Match/Play'
 
class Toss extends Component {
  handlePLAY=()=>{this.props.history.push('/Match');}
  state={random:0,teamA:"TEAM A",teamB:"TEAM B",team:"",TXT:""}
  heandleclick =(e) =>{
    const rand = Math.floor(Math.random() *2);
    this.setState({ random: this.state.random=rand });
    this.setState({TXT:"GOING TO PLAY FIRST"})
    if(rand===0){this.setState({team:this.state.teamA})}
    else{this.setState({team:this.state.teamB})}
  }
  render(){

  return (
    <div className="Toss">
      
      <button id="btn" onClick={this.heandleclick}>TOSS</button>
      <h1>LETS SEE WHICH TEAM GOING TO PLAY FIRST</h1>
      <h1><b className="bol">{this.state.team}</b> {this.state.TXT}</h1>
      
      <input type="button" value="LETS PLAY......" onClick={this.handlePLAY}></input>
      <Route path="/Match" component={Play}/> 
    </div>
  )
}
}

export default Toss;
