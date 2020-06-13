import React, { Component } from 'react'
import Select from './Select'
import Add from './Add'
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      playersTA:[],playersTB:[]
  }}
  handlePlayersA=(data)=>{
    data.id=Math.random();
    const arrA =[...this.state.playersTA,data];
    this.setState({playersTA:arrA})
  }
  handlePlayersB=(data)=>{
    data.id=Math.random();
    const arrB =[...this.state.playersTB,data];
    this.setState({playersTB:arrB})
  } 
  render() {
    return (
      <div>
      <Select playersTA={this.state.playersTA} playersTB={this.state.playersTB}/>
      <Add addA={this.handlePlayersA} addB={this.handlePlayersB}/>
        
      </div>
    )
  }
} 

export default Enter;
