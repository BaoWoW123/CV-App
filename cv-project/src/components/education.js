import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education">
        Education
        <div>
          <input type="text" placeholder="Name of college" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Degree" />
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="text" placeholder="GPA" />
        </div>
        <button className="addBtn">Add</button>
      </div>
    );
  }
}

export default Education;
