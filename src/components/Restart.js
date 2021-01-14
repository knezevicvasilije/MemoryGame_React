import React from 'react';

class Restart extends React.Component {
handleClick = () => {
    this.props.newGame(false);
}

    render() { 
        return ( 
            <div>
                <h2>Game Over</h2>
                <button onClick={this.handleClick}>Go again</button>
            
            </div>
         );
    }
}
 
export default Restart;