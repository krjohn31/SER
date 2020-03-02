import React, {Component} from "react";

/*
This class displays the Payment page when the user
wants to make a donation.
*/
class Payment extends Component {
    constructor() {
        super()
        let pageId = 5;
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
                    <h2>Payment Page</h2>
                    <transaction />
                    <button>Submit Payment</button>
                    <button>Cancel</button>
            </div>
        )
    }
}

export default Payment
