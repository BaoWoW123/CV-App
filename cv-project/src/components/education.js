import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  clearInput = () => {
    const inputs = document.querySelector(".eduInputs").childNodes;
    inputs.forEach((input) => {
      input.value = "";
    });
  };
  render() {
    return (
      <div className="education">
        Education
        <div className="eduInputs">
          <input
            type="text"
            placeholder="Degree"
            id="eduDegree"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="City"
            id="eduCity"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="State"
            id="eduState"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="Name of college"
            id="eduCollege"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="From"
            id="eduFrom"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="To"
            id="eduTo"
            onChange={this.props.updateEdu}
          />
          <input
            type="text"
            placeholder="GPA"
            id="eduGpa"
            onChange={this.props.updateEdu}
          />
        </div>
        <button
          type="button"
          id="addEduBtn"
          onClick={(el) => {
            this.props.addEdu(el);
            this.clearInput();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Education;
