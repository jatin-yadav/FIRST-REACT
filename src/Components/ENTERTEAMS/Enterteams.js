import React, { Component } from 'react';
import './Enterteams.css';
import Enter from '../ENTERTEAMS/Enter';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Play from '../Match/Play';

class Enterteams extends Component {

  handlePLAY = () => { this.props.history.push('/Match'); }
  state = {
    ANames: [], Aplayers: [], Bplayers: [], BNames: [], enter: 1, try: 2, condition: null,
     change: false, Schange: false,TeamA: '', TeamB: '', TEamA: null, TEamB: null, 
     TEAMAinput: false, TEAMBinput: false,
     
  }

  handle = (e) => { alert('sucessfully submitted') }
  componentDidMount() {
    axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee046a6b158c33dfc8718e4')
      .then(response => {
        console.log(response)
        this.setState({ Aplayers: response.data.team });
      })
      .catch(error => {
        console.log(error)
      }
      )
    axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee04522b158c33dfc8718d7')
      .then(resp => {
        console.log(resp)
        this.setState({ Bplayers: resp.data.team });
      })
  }
  handleChangeTEA = (e) => { this.setState({ TeamA: e.target.value }) }
  handleSubmitTEAS = (e) => { e.preventDefault(); this.setState({ TEamA: this.state.TeamA }); this.setState({ TEAMAinput: true }) }
  handleChangeTEB = (e) => { this.setState({ TeamB: e.target.value }) }
  handleSubmitTEBS = (e) => { e.preventDefault(); this.setState({ TEamB: this.state.TeamB }); this.setState({ TEAMBinput: true }) }
  handlecallbackE = (data) => { this.setState({ Schange: data }) }
  handleclickA = (e) => {
    this.setState({ change: true })
    this.setState({ ANames: this.state.Aplayers });
  }
  handleclickB = (e) => {
    console.log(this.state);
    this.setState({ BNames: this.state.Bplayers });
  }
  render() {
    const enterdata = {display: '' }
    const selectdata = { display: '' }
    if (this.state.change) { enterdata.display = 'none' }
    if (this.state.Schange) { selectdata.display = 'none' }
    const TEamAinput = { display: '' }
    if (this.state.TEAMAinput) { TEamAinput.display = 'none' }
    const TEamBinput = { display: '' }
    if (this.state.TEAMBinput) { TEamBinput.display = 'none' }
    const APlayers = this.state.ANames ?
      (
        <div>
          <div>
            {this.state.ANames.map(data => {
              return (<ul type="none" className="PLYN">

                <li><h2>{data.name}</h2></li>

              </ul>)
            })}


          </div>

        </div>
      ) :
      (<div>loading data .....</div>);
    const BPlayers = this.state.BNames ?
      (
        <div>
          <div>
            {this.state.BNames.map(data => {
              return (<ul type="none" className="PLYN">
                <li><h2>{data.name}</h2></li>

              </ul>

              )
            })}


          </div>
        </div>

      ) :
      (<div>loading data .....</div>);
    return (
      <div className="ENTERTEAMS">
        <div className="Enter">
          <div style={selectdata}>
            <h1>SELECT TEAM</h1> <br></br>
            <div>
              <ol className='Tlist' >
                <li onClick={this.handleclickA}><h2>SUNRISERS HYDERABAD</h2></li><br></br>
                <li onClick={this.handleclickB}><h2>CHENNI SUPER KINGS</h2></li><br></br>
                <li onClick={this.handleclickA}><h2>MUMBAI INDIANS</h2></li><br></br>
                <li onClick={this.handleclickB}><h2>RAJASTHAN ROYALS</h2></li><br></br>
              </ol>
            </div>
          </div>
          <div className="Tinput">
            <div className="Pnames">
              <div>{APlayers}</div>
              <div>{BPlayers}</div>
            </div>
            <div style={enterdata}>
              <div>
                <h1>ENTER TEAMS NAME</h1>
                <div className="ETeamIN">
                  <div className="EINPUT">
                    <form style={TEamAinput} onSubmit={this.handleSubmitTEAS} id="Aoe">
                      <input type="text" id="name" placeholder="FIRST TEAMNAME" onChange={this.handleChangeTEA} />
                      <button>ADD</button>
                    </form>
                    <h2>{this.state.TEamA}</h2>
                  </div>
                  <div className="EINPUT">
                    <form style={TEamBinput} onSubmit={this.handleSubmitTEBS} id="Aone">
                      <input type="text" id="name" placeholder="SECOND TEAMNAME" onChange={this.handleChangeTEB} />
                      <button>ADD</button>
                    </form>
                    <h2>{this.state.TEamB}</h2>
                  </div>
                </div>
              </div>
              <h1 id="EPN">ENTER PLAYERS NAME</h1>
              <div className="TEnter">


              </div>
              <div ><Enter Ecallback={this.handlecallbackE} TEAMANAME={this.state.TeamA} TEAMBNAME={this.state.TeamB}/></div>
            </div>
          </div>
        </div>
        <button className="nextbtn" onClick={this.handlePLAY}>LETS PLAY </button>
        <Route path="/Match" component={Play} />
      </div>
    )
  }
}

export default Enterteams
