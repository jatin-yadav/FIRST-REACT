import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
import './Play.css'
import Result from '../RESULTS/Result'
class play extends Component {
  handleRESULT = () => { this.props.history.push('/Result'); 
}
  state = { ANames: [], Aplayers: [], Bplayers: [], BNames: [], scoreA: 0, totalA: 0, scoreB: 0, totalB: 0, incrementA: 0, incrementB: 0, idA: null, idB: null, Pbtn1: false, Pbtn2: false }
   handlebattingA = () => {
     this.state.incrementA++
       if (this.state.incrementA <= 6) {
          const runA = Math.floor(Math.random() * 6);
          this.setState({ scoreA: this.state.scoreA = runA });
          this.setState({ totalA: this.state.totalA + runA });

        }    else {
                 this.setState({ Pbtn1: this.state.Pbtn1 = true })
                alert('Your one over is completed');
        }
             console.log(this.state.totalA);

    }
  handlebattingB = () => {
       this.state.incrementB++
        if (this.state.incrementB <= 6) {
              const runB = Math.floor(Math.random() * 6);
              this.setState({ scoreB: this.state.scoreB = runB });
              this.setState({ totalB: this.state.totalB + runB });

        } else {
               this.setState({ Pbtn2: this.state.Pbtn2 = true })
              alert('your one over is completed')
    }

       console.log(this.state.totalB);


    

  }
    componentWillUnmount() {
    const finalScoreA = {
      "_id": "5ee046a6b158c33dfc8718e4",
      "score": this.state.totalA
    }
      axios.put('https://api-cricket-match.herokuapp.com/stadium/scoreUpdates', finalScoreA)
       .then((finalScoreA) => {
          console.log(finalScoreA);
        })
    const finalScoreB = {
      "_id": "5ee04522b158c33dfc8718d7",
      "score": this.state.totalB
    }
    axios.put('https://api-cricket-match.herokuapp.com/stadium/scoreUpdates', finalScoreB)
      .then((finalScoreB) => {
        console.log(finalScoreB);
      })
    console.log(finalScoreA, finalScoreB);




  }


  componentDidMount() {
    axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee046a6b158c33dfc8718e4')
      .then(response => {
        console.log(response)
        this.setState({ Aplayers: response.data.team.slice(0, 11) });
      })
      .catch(error => {
        console.log(error)
      }
      )
    axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee04522b158c33dfc8718d7')
      .then(response => {
        console.log(response)
        this.setState({ Bplayers: response.data.team.slice(0, 11) });
      })
  }




  render() {
    const BTNone = { display: '' }
       if (this.state.Pbtn1) { BTNone.display = 'none' }
    const BTNtwo = { display: '' }
        if (this.state.Pbtn2) { BTNtwo.display = 'none' }

    const APlayers = this.state.ANames ?
      (
        <div className="Ptext1">

          {this.state.Aplayers.map(data => {
            return (<ul type="none"><li><h2><b>{data.name}</b></h2></li></ul>
            )
          })}

        </div>
      ) :
      (<div>loading data .....</div>);
    const BPlayers = this.state.BNames ?
      (
        <div className="Ptext2">

          {this.state.Bplayers.map(data => {
            return (<ul type="none"><li><h2><b>{data.name}</b></h2></li></ul>
            )
          })}


        </div>
      ) :
      (<div>loading data .....</div>);



    return (
      <div className='Pbasic'>
        <div id="details">
            <h1 className="Pheading"><b><center>TEAM A VS TEAM B</center></b></h1>
        </div>

        <div className="playbutton">
           <div style={BTNone}><button id="Pbtn" onClick={this.handlebattingA}>BATTING A</button></div>
          
           <div style={BTNtwo}><button id="Pbtn" onClick={this.handlebattingB}>BATTING B</button></div>
        </div>
       
        <div>
           <div  className="Pflextry">
              <div className="playersA">
                    <h1 className="head"><center><b>TEAM A</b></center></h1>
                    <h5 className="list">{APlayers}</h5>
              </div>
          <div className="Pscorepop">
                 <div className="Pmsg"><b>TEAM A Run: {this.state.scoreA}</b><br></br><b>TEAM A Total: {this.state.totalA}</b></div><br></br>
                 <div className="Pmsg"><b>TEAM B Run: {this.state.scoreB}</b><br></br><b> TEAM B Total: {this.state.totalB}</b></div>
             <div className="PresultShow">
                  <button className="Pclick" onClick={this.handleRESULT}>RESULT</button>
                     <Route path="/Result" component={Result} />
              </div>
                 
          </div>
             <div className="playersB">
                 <h1 className="head"><center><b>TEAM B</b></center></h1>
                 <h5 className="list">{BPlayers}</h5>
              </div>
            </div>
          
        </div>
      </div>
    )

  }

}

export default play















