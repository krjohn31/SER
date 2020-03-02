import React, {Component} from "react";

/*
This class displays the Employee's main page.
*/
class Employee extends Component {
    constructor() {
        super()
        let pageId = 4;
    }
    
    /*
    This function displays the current services available
    and their status
    */
    function currentServices() {
      return (
      
      )
    }
    
    /*
    This function makes it possible for the employee
    to register a new service
    */
    function createService() {
      return (
      
      )
    }
    
    render() {
        return (
            <div>
                    <img src="calendar.png"/>
                    <h2>Welcome Employee!</h2>
                    <currentServices />
                    <createService />
            </div>
        )
    }
}

export default Employee
