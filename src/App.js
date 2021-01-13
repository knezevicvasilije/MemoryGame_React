import React from 'react';
import './App.css';
import Login from './components/Login';
import PlayBoard from './components/PlayBoard';
import GameInfo from './components/GameInfo';
import Restart from './components/Restart';

class App extends React.Component{
  state = {
    showLogin: true,
    showRestart: false,
    player: "",
    score: 0
  }
  handleLogin = (player, boolean) => {
    this.setState({ player: player, showLogin: boolean });
  };

  handleRestart = (boolean) => {
    if(boolean){
      this.setState({showRestart : boolean, score: this.state.score +1 });
    }else{
      this.setState({showRestart: boolean})
    }
  }; 
  
  render() {
    const { showLogin, player, score, showRestart } = this.state;
    return (
    <div className="App">
        {showLogin ? <Login player={this.handleLogin}/> : null}
      <GameInfo player={player} score={score}/>
    </div>
  );
}}

export default App;
