import React, {Component} from "react";

/*
This class is the Registration page for a user to enter
their personal information and be added to the User database.
*/

class Regiser extends Component {
  constructor() {
    super()
    createUser()
    let pageId = 1;
  }
  
  render() {
    return (
      /*
      Prompt user for their name
      */
      <label>Name</label>
      <input name="first" class="req">first</input>
      <input name="last" class="req">last</input>

      <img "src"='.\divisionBar.png>

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

      /*
      Prompt user for their phone number
      */
      <label>Phone Number</label>
      <input name="phone" class="req">phone</input>

      /*
      Prompt user for their Date of Birth
      */
      <label>Date of Birth</label>
      <input name="dob" class="req">dob</input>

      <img "src"='.\divisionBar.png>

      /*
      Prompt user for their email address
      */
      <label>Email</label>
      <input name="email" class="req">email</input>

      /*
      Prompt user to create a password
      */
      <label>password</label>
      <input name="password" class="req">password</input>

      /*
      Prompt the user to sign up as a Volunteer
      */
      var volunteer =document.createElement("INPUT");
      volunteer.setAttribute("type", "checkbox");
      document.body.appendChild(volunteer);
      <label>Sign me up to Volunteer!</label>

      <button onClick="createUser()">REGISTER</button>
    )
  }
}

extend default Register
