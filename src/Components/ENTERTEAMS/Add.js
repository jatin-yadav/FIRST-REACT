import React, { Component } from 'react'
import './Add.css'

class Add extends Component {
  state = { name: null, id: null, InputCon: false, countone: 0, counttwo: 0 }
  handleChangeTA = (e) => {

    const { callback } = this.props
    callback(this.state.InputCon)
    this.setState({ InputCon: true });
    return (this.setState({ [e.target.id]: e.target.value }));

  }
  handleChangeTB = (e) => {

    const { callback } = this.props
    callback(this.state.InputCon)
    this.setState({ InputCon: true });
    return (this.setState({ [e.target.id]: e.target.value }))
  }
  handleSubmitA = (e) => {
    this.setState({ countone: this.state.countone + 1 });
    e.preventDefault();
    this.props.addA(this.state);
  }
  handleSubmitB = (e) => {
    this.setState({ counttwo: this.state.counttwo + 1 });
    e.preventDefault();
    this.props.addB(this.state);
  }


  render() {
    const FIRST = { display: '' }
    if (this.state.countone === 11) { FIRST.display = 'none' }
    const SECOND = { display: '' }
    if (this.state.counttwo === 11) { SECOND.display = 'none' }

    return (

      <div className="ADD">

        <div className="Add">
          <div className="input">
            <h4>ADD PLAYERS FOR 1ST TEAM</h4>
            <form onSubmit={this.handleSubmitA} id="Aone">
              <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTA} style={FIRST} />
              <button style={FIRST}>ADD</button>
            </form>
          </div>

          <div className="input">
            <h4>ADD PLAYERS FOR 2ND TEAM</h4>
            <form onSubmit={this.handleSubmitB} id="Atwo">
              <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTB} style={SECOND} />
              <button style={SECOND}>ADD</button>
            </form>
          </div>
        </div>
        {console.log(this.state.countone)}
        {console.log(this.state.counttwo)}
      </div>
    )
  }
}

export default Add;