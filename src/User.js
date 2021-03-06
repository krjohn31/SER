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
    and their status
    */
    function currentServices() {
        // Connect with services database
        var services[] = servicesSQL.getTable();
      return (
        // Iterate through services table and display them
        for(var i=0; services[i]!=NULL; i++) {
            <p>services[i].name<\p>
            <p>services[i].description<\p>
            <p>services[i].date<\p>
        }
      )
    }
    
    /*
    This function lists the upcoming services the
    current user has requested
    */
    function upcomingServices() {
        // Get list of upcoming services
        var services[] = servicesSQL.getTable();
        var i = 0;
      return (
        while(services[i].getRequestor() === currentUser.name) {
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
                    <h2>Welcome User!<\h2>
                    <currentServices />
                    <upcomingServices />
            </div>
        )
    }
}

export default User
