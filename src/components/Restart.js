import React from 'react';

class Restart extends React.Component {
handleClick = () => {
    this.props.newGame(false);
}

    render() { 
        return ( 
            <div className="gameOver">
                <div className="message">
                <h2>{this.props.message}</h2>
                 <button class="ui inverted violet basic button"onClick={this.handleClick}>Start!</button>
                
                </div>
            </div>
         );
    }
}
 
export default Restart;