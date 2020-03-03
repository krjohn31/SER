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
        // Connect with services database
        var services[] = servicesSQL.getTable();
      return (
        // Iterate through services table and display them
        for(var i=0; services[i]!=NULL; i++) {
            System.out.print.services[i].name;
            System.out.print.services[i].description;
            System.out.print.services[i].date;
        }
      )
    }
    
    /*
    This function makes it possible for the employee
    to register a new service
    */
    function createService() {
        newService = NULL;
      return (
          <label>Service Name</label>
          <input name="sName" class="req">sName</input>
          
          <label>Description</label>
          <input name="description" class="req">description</input>
                    
          <label>Date</label>
          <input name="date" class="req">date</input>
          
          <label>Volunteers Needed</label>
          <input name="volNeeded" class="req">volNeeded</input>
          
          <label>Location</label>
          <input name="location" class="req">location</input>
          
          newService.add(sName, description, date, volNeeded, location);
      )
    }
    
    render() {
        return (
            <div>
                    <img src="./images/calendar.png"/>
                    <h2>Welcome Employee!</h2>
                    <currentServices />
                    <createService />
            </div>
        )
    }
}

export default Employee
