import React, {Component} from "react";
import home from '.\Home';
import employee from '.\Employee';
import volunteer from '.\Volunteer';
import user from '.\User';
import register from '.\Register';
import donate from '.\Donate';
import payment from '.\Payment';

/*
This class  controls which page is to be displayed
depending on what screen the user has navigated to
*/
class Control extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
          // Read the current page ID being viewed
          let pageId = this.props.pageId;
          let currentPage = home;
          
          switch (pageId) {
            case 1:
              // Return Register Page
              currentPage = register;
              break;
            case 2:
              // Return Donation Page
              currentPage = donate;
              break;
            case 3:
              // Return General User Page
              currentPage = user;
              break;
            case 4:
              // Return Volunteer Page
              currentPage = volunteer;
              break;
            case 5:
              // Return Employee Page
              currentPage = employee;
              break;
            case 6:
              // Return the Payment Page
              currentPage = payment;
              break;
            default:
              // Default is the home page
              currentPage = home;
          }
          
        return (
            <div>
              <CurrentPage />
            </div>
        )
    }
}

export default Control
