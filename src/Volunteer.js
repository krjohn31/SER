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
    This function lists the upcoming services the
    current volunteer is enlisted for
    */
    function enlistedServices() {
        // Get list of upcoming services
        var services[] = servicesSQL.getTable();
        var i = 0;
        return (
            while(services[i].getVolunteer() === currentUser.name) {
                <p>services[i].name<\p>
                <p>services[i].description<\p>
                <p>services[i].date<\p>
                i++;
            }
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
