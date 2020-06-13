import React, { Component } from 'react'
import './Result.css'
import axios from 'axios'
 class Result extends Component {
     state={Aplayers:[],Ascore:0,Bscore:0,Difference:0}
    componentDidMount(){
        axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee046a6b158c33dfc8718e4')
        .then(response =>{
            console.log(response)
            this.setState({Ascore: response.data.teamRuns});
            console.log(this.state.Ascore)
        })
        .catch(error => {
            console.log(error)
        }
        )
        axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee04522b158c33dfc8718d7')
        .then(response =>{
            console.log(response)
            this.setState({Bscore: response.data.teamRuns});
            console.log(this.state.Bscore)
        })
        
    }
    handleclick=(e)=>{this.setState({Difference:this.state.Ascore-this.state.Bscore}) 
    console.log(this.state.Difference)} 
    render() {
        
        return (
            <div >
                <div className="RMain">
                <h1><b>Indian Premier League</b></h1>
                   <div className="RTeams">
                       <div className="shape"><h1>Team:A</h1></div>
                       <div className="RVs"><h1>Vs</h1></div>
                       <div className="shape"><h1>Team:B</h1></div>
                   </div>
                   <div className="RScore">
                       <div className="shape2"><h1>Score of Team A: {this.state.Ascore}</h1></div>
                       <div className="shape2"><h1>Score of Team B: {this.state.Bscore}</h1></div>
                   </div>
                   <button className="Rbtn" onClick={this.handleclick}>Show the Winner</button>
                    <div className="RCongo">Whoopeeee..!!</div>
                     <div className="RFinal">A wins by {this.state.Difference} Runs</div>
                </div>
            </div>
        )
    }
}

export default Result;
