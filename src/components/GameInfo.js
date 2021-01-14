import React from 'react';

class GameInfo extends React.Component {
    render() { 
        const {player, score, tries} = this.props;
        return ( 
           
            <div>
                 <div className="memoryGame">Memory</div>
                 <div className="info">
                <div className="player"><h1>Welcome: </h1> <h2>{player}</h2></div>
                <div className="player"><h1>Score: </h1> <h2>{score}</h2></div>
                <div className="player"><h1>Tries</h1><h2>{tries}</h2></div>
                </div>
            </div>
         );
    }
}
 
export default GameInfo;