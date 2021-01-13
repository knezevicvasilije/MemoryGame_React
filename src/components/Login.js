import React from 'react';
import '../styles/login.css'
class Login extends React.Component {
    state = {  }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Radiiii")
    }
    render() { 
        return ( 
            <div className="container">
            <section id="content">
                <form>
                    <h1>Memory Game</h1>
                    <div>
                        <input type="text" placeholder="Enter your name" required="" id="username" />
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