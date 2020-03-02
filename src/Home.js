import React, {Component} from "react";

class Home extends Component {
    constructor() {
        super()
        let pageId = 0;
    }
    
    /*
    This function attempts to connect to the user database
    and validates 
    */
    function login() {
        let user = this.props.userName;
        let password = this.props.password;
        var current = 0;
        while (userdatabase[current] != NULL) {
            if(user === current.userName  && password === current.password) {
                //Check if user is volunter or employee
                
            }
            current++;
        }
        <h2>Login Attempt Failed</h2>
    }
    render() {
        return (
            <div>
                    <button onClick="login()">Login</button>
                    <button>Donate</button>
                    <h2>Mission Statment</h2>
            </div>
        )
    }
}

export default Home
