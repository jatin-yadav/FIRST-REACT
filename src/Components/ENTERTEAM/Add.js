import React, { Component } from 'react'
import './Add.css'

 class Add extends Component {
   state={name:null,id:null}
   handleChangeTA=(e)=>{return(this.setState({[e.target.id]:e.target.value}))}
   handleChangeTB=(e)=>{return(this.setState({[e.target.id]:e.target.value}))}
   handleSubmitA=(e)=>{
     e.preventDefault();
   this.props.addA(this.state);  
} 
handleSubmitB=(e)=>{
  e.preventDefault();
this.props.addB(this.state);  
} 

   render() {
     
    return (
      
      <div className="Add">
      <div className="input">
          <form onSubmit={this.handleSubmitA}>
             <lable>ADD PLAYERS FOR 1ST TEMAM</lable>
             <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTA} />
             <button>ADD</button>
          </form>
      </div>
      <div className="input">
      <form onSubmit={this.handleSubmitB}>
      <lable>ADD PLAYERS FOR 2ND TEMAM</lable>
      <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTB} />
      <button>ADD</button>
   </form>
      </div>
      </div>
    )
  }
}

export default Add;