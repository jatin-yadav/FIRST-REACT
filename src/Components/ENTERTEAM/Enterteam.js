import React, { Component } from 'react'
import Enter from '../ENTERTEAM/Enter'
//import Select from '../ENTERTEAM/Select'
import Default from '../ENTERTEAM/Default'
import {Route} from 'react-router-dom';
import Toss from '../TOSS/Toss'
import Addplayers from './Addplayer';
import './Enterteam.css'

class Enterteam extends Component {
  handleTOSS=()=>{this.props.history.push('/Toss');}
  
  constructor(props){
    super(props);
    this.state={enter:1,try:2,condition:null};
  this.handleSELECT=this.handleSELECT.bind(this)

  }
  handleSELECT=event=>{this.setState({condition:event.target.value})}
  //handleSUBMIT=(e)=>{console.log(this.state.condition)}
  componentselector () { 
    if(this.state.condition==="enter"){return(
     <Enter />)}
    else if(this.state.condition==="select")
    {return(<Addplayers />)}
    else{return(<Default />)}
  }
  render() {
    return (
      <div className="Enterteam">
        <h1>SELECT ONE OPTION</h1>
        <select value={this.state.condition} onChange={this.handleSELECT}>
          <option value="default">select one option</option>
          <option value="enter">ENTER PLAYERS</option>
          <option value="select">SELECT PLAYERS</option>
        </select>
        {this.componentselector()}
        <input type="button" value="LETS DO TOSS" onClick={this.handleTOSS}></input>
        <Route path="/Toss" component={Toss}/>
      </div>
    )
  }
}

export default Enterteam;
