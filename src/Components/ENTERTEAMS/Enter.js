import React, { Component } from 'react'
import Select from './Select'
import Add from './Add'
import axios from 'axios'
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      playersTA:[],
      playersTB:[],
      InputCon:null,
      EteamNameA:[{teamName:'RCB',players:[{name:'jatin'}]}],
      EteamNameB:[{teamName:'',players:[{name:''}]}]

  }}
 componentDidMount(){
   axios.post('https://api-cricket-match.herokuapp.com/team/createTeam',this.state.EteamNameA)
  .then(response => {
    console.log(response)
      })
  .catch(error => {
    console.log(error)
  }
  )
 /* axios.post('https://api-cricket-match.herokuapp.com/team/createTeam',this.state.EteamNameB)
  .then(response => {
    console.log(response)
      })*/

  }
  handlePlayersA=(data)=>{
    data.id=Math.random();
    const arrA =[...this.state.playersTA,data];
    this.setState({playersTA:arrA})
    console.log(this.props.TApassA)
    //console.log(...this.state.InputCon,daata)
  }
  handlePlayersB=(data)=>{
    data.id=Math.random();
    const arrB =[...this.state.playersTB,data];
    this.setState({playersTB:arrB})
  } 
  handlecallback=(data)=>{
    const {Ecallback}=this.props
    Ecallback(this.state.InputCon)
    this.setState({InputCon:data})}
    passon=(e)=>{
      e.preventDefault();
      const name=this.state.playersTA.map(data=>{return(<div name={data.name}>
        <h1></h1></div>)})
        this.setState()
    }
  render() {
    /*console.log(this.props);
    const TEAMtutA=this.props.TEAMANAME
    const TEAMtutB=this.props.TEAMBNAME;*/

    const TApass=this.state.playersTA.map(data=>{return(<div name={data.name}>
      <h1></h1></div>)})
    const TBpass=this.state.playersTB
    return (
      <div> 
      {console.log(TApass)}
      <Add addA={this.handlePlayersA} addB={this.handlePlayersB} callback={this.handlecallback}/>
      <Select playersTA={this.state.playersTA} playersTB={this.state.playersTB}/>
        {this.props.TEAMtutA}
        {this.props.TEAMtutB}
        <button onClick={this.passon}>submit</button>
      </div>
    ) 
  }
} 

export default Enter;
