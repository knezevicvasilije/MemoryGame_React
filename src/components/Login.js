import React from 'react';
import '../styles/login.css'
class Login extends React.Component {
    state = {  }

    handleChange = (e) => {
        this.setState({player: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.player(this.state.player, false);
    };

    render() { 
        return ( 
            <div className="container">
            <section id="content">
                <form>
                    <h1>Memory Game</h1>
                    <div>
                        <input type="text" onChange={this.handleChange} placeholder="Enter your name" id="username" />
                    </div>
                    <div>
                        <input type="submit" onClick={this.handleSubmit} value="Start" />
                    </div>
                </form>
            </section>
        </div>
         );
    }
}
 
export default Login;