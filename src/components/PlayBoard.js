import React from 'react';
import Cards from './Cards';
import '../styles/gameBoard.css'
class PlayBoard extends React.Component {
  
    render() { 
        return ( 
            <div className="playBoard">
                <Cards restart={this.props.restart} score={this.props.score}  />
            </div>
         );
    }
}
 
export default PlayBoard;