import React, {Component} from "react";

class Home extends Component {
    constructor() {
        super()
        let pageId = 0;
    }
    
    render() {
        return (
            <div>
                    <button>Login</button>
                    <button>Donate</button>
                    <h2>Mission Statment</h2>
            </div>
        )
    }
}

export default Home
