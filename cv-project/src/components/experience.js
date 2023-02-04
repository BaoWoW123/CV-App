import React, {Component} from "react";

class Experience extends Component {
    constructor() {
        super()
    }

    render() {
        return (
        <div className="experience">
            Experience
            <div>
          <input type="text" placeholder="Position" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="text" placeholder="Description" />
        </div>
          <button className="addBtn">Add</button>
        </div>
        )
    }
}

export default Experience;