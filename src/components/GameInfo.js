import React from 'react';

class GameInfo extends React.Component {
    render() { 
        const {player, score} = this.props;
        return ( 
            <div>
                <div>Memory</div>
                <div>{player}</div>
                <div>Score: {score}</div>
            </div>
         );
    }
}
 
export default GameInfo;