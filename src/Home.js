import React, {Component} from "react";

/*
This class displays the Home page.
*/
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
        var current = 0;
        
        /*
        Prompt user for their Login credentials
        */
        <label>Username: </label>
        <input name="userName" class="req">userName</input>
        <label>Password: </label>
        <input name="password" class="req">password</input>
        
        let user = this.props.userName;
        let password = this.props.password;
        
        /*
        Search the user database with the given login credentials
        */
        while (userdatabase[current] != NULL) {
            if(user === current.userName  && password === current.password) {
                //Check if user is volunter or employee
                if(current.status === employee) {
                    <h2>Welcome Employee!</h2>
                }
                else if(current.status === volunteer) {
                    <h2>Welcome Volunteer!</h2>
                }
                else {
                    <h2>Welcome User!</h2>
                }
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
                    <currentServices />
                    <currentNews />
            </div>
        )
    }
}

export default Home
