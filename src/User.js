import React, {Component} from "react";

/*
This class displays the User's main page.
*/
class User extends Component {
    constructor() {
        super()
        let pageId = 2;
    }
    
    /*
    This function displays the current services available
    */
    function currentServices() {
      return (
      
      )
    }
    
    /*
    This function lists the upcoming services the
    current user has requested
    */
    function upcomingServices() {
      return (
      
      )
    }
    
    render() {
        return (
            <div>
                    <img src="calendar.png"/>
                    <h2>Welcome User!</h2>
                    <currentServices />
                    <upcomingServices />
            </div>
        )
    }
}

export default User
