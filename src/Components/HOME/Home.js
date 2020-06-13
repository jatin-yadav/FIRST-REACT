import React, { Component } from 'react'
import './Home.css'
import Enterteams from '../ENTERTEAMS/Enterteams';
import { Route } from 'react-router-dom';

import Instruction from '../INSTRUCTIONS/Instruction';
class Home extends Component {
  handleINSTRUCT = () => { this.props.history.push('/Instruction'); }
  handleSTART = () => { this.props.history.push('/Enterteams'); }
  render() {
    return (
      <div className="Hwrap">

        <div className="Heading">
          <h1><u><i>INDIAN PREMIER LEAGUE</i></u></h1>

          <div className="HOME">

            <div className="home">
              {/*create a div named "Hcontent" and show the detail about the website*/}
              <div className="Hcontent" >
                <div>

                  <p>
                    <br></br><br></br><br></br><b>Hey there!!<br></br>We released a new online Cricket game ,check it out.</b>
                  </p>
                </div>

                {/*buttons for INSTRUCTIONS and START are created*/}
                <div className="Gstart">
                  <input type="button" className="btn" value="INSTRUCTION" onClick={this.handleINSTRUCT}></input><br></br><br></br>
                  <Route path="/Instruction" component={Instruction} />
                  <input type="button" value="Let Start" onClick={this.handleSTART}></input>
                  <Route path="/Enterteams" component={Enterteams} />
                </div>

              </div>

              {/*a div for displaying image in the website*/}
              {/*<div className="img">
          <img src={logo}  alt="homeimg" /> */}
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Home;
