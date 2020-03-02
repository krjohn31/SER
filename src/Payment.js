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
    This function connects the third party
    transaction application with the web site.
    */
    function transaction() {
      return (
        var cardinfo = this.props.cardinfo
      )
    }
    
    render() {
        return (
            <div>
                    <h2>Payment Page<\h2>
                    <h1>Contact Information<\h1>
                    /*
                    Prompt user for their name
                    */
                    <label>Name</label>
                    <input name="first" class="req">first</input>
                    <input name="last" class="req">last</input>
                    /*
                    Prompt user for their phone number
                    */
                    <label>Phone Number</label>
                    <input name="phone" class="req">phone</input>
            
                    <img "src"='.\divisionBar.png>
            
                    <h1>Address of Service<\h1>
            
                    /*
                    Prompt user for their address
                    */
                    <label>Address</label>
                    <input name="street" class="req">street</input>
                    <label>City</label>
                    <input name="city" class="req">city</input>
                    <label>State</label>
                    <input name="dropdown", class="dropdown-content">
                      state
                      <a>AL</a>
                      <a>AK</a>
                      <a>AZ</a>
                      <a>AR</a>
                      <a>CA</a>
                      <a>CO</a>
                      <a>CT</a>
                      <a>DE</a>
                      <a>FL</a>
                      <a>GA</a>
                      <a>HI</a>
                      <a>ID</a>
                      <a>IL</a>
                      <a>IN</a>
                      <a>IA</a>
                      <a>KS</a>
                      <a>KY</a>
                      <a>LA</a>
                      <a>ME</a>
                      <a>MD</a>
                      <a>MA</a>
                      <a>MI</a>
                      <a>MN</a>
                      <a>MS</a>
                      <a>MO</a>
                      <a>MT</a>
                      <a>NE</a>
                      <a>NV</a>
                      <a>NH</a>
                      <a>NJ</a>
                      <a>NM</a>
                      <a>NY</a>
                      <a>NC</a>
                      <a>ND</a>
                      <a>OH</a>
                      <a>OK</a>
                      <a>OR</a>
                      <a>PA</a>
                      <a>RI</a>
                      <a>SC</a>
                      <a>SD</a>
                      <a>TN</a>
                      <a>TX</a>
                      <a>UT</a>
                      <a>VT</a>
                      <a>VA</a>
                      <a>WA</a>
                      <a>WV</a>
                      <a>WI</a>
                      <a>WY</a>
                    </input>

                    <label>Zip</label>
                    <input name="zip" class="req">zip</input>
            
                    <img "src"='.\divisionBar.png>
            
                    <h1>Card Information<\h1>
                    <transaction />
            
                    <img "src"='.\divisionBar.png>
            
                    <button>Submit Payment<\button>
                    <button>Cancel<\button>
            </div>
        )
    }
}

export default Payment
