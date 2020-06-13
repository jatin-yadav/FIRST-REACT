import React, {Component} from 'react';
import axios from 'axios'
import './Frontplayers.css'
class Addplayers extends Component{
    state={ANames:[],Aplayers:[],Bplayers:[],BNames:[]
        }
        handle=(e)=>{alert('sucessfully submitted')}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response)
            this.setState({Aplayers: response.data.slice(0,15)});
        })
        /*.catch(error => {
            console.log(error)
        }
        )*/
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            console.log(resp)
            this.setState({Bplayers: resp.data.slice(0,15)});
        })
    }
   
    handleclickA=(e)=>{
        
        this.setState({ANames :this.state.Aplayers});
       }
    handleclickB=(e)=>{
        console.log(this.state);
        this.setState({BNames :this.state.Bplayers});
    }
    render(){
        const APlayers = this.state.ANames ?
        (
            <div>
            <div className="data">
            {this.state.ANames.map(data =>{
                return(<ul type="square" >
                
                    <li><h2>{data.name}<input type="checkbox" /></h2></li>
                
                    </ul>)})}
                    <button onClick={this.handle}>SUBMIT</button>
                   
                </div>
                
            </div>
        ) : 
        (<div>loading data .....</div>);
        const BPlayers = this.state.BNames ?
        (
          <div>
            <div className="data">
            {this.state.BNames.map(data =>{
                return(<ul type="square">
                    {/*<li><h3>{data.id}</h3></li>*/}
                    <li><h2>{data.name}<input type="checkbox" /></h2></li>
                
                    </ul>
                   
                    )})}
                    
            <button onClick={this.handle}><center>SUBMIT</center></button>
            </div>
            </div>

        ) : 
        (<div>loading data .....</div>);
       
        return(
        <div className="primary" >
        
            <h1>INDIAN PREMIER LEAGUE</h1>
            <div className="teamselection">
            <h1>SELECT TEAM TO ADD PLAYERS</h1>
            
            <button id='a' onClick={this.handleclickA}>TEAM A</button>
            <button id='b' onClick={this.handleclickB}>TEAM B</button>
            <h2 id="try">  </h2>
            
            </div>
            <br></br>
            <div id="Aplayerslist">{APlayers}</div>
            <div id="Bplayerslist">{BPlayers}</div>
        </div>

        
        )}
        }

export default Addplayers; 