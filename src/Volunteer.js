import React, {Component} from "react";

/*
This class displays the Volunteer's main page.
*/
class Volunteer extends Component {
    constructor() {
        super()
        let pageId = 3;
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
    current volunteer is enlisted for
    */
    function enlistedServices() {
      return (
      
      )
    }
    
    render() {
        return (
            <div>
                    <img src="./images/calendar.png"/>
                    <h2>Welcome Volunteer!</h2>
                    <currentServices />
                    <enlistedServices />
            </div>
        )
    }
}

export default Volunteer
