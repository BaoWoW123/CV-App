import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  clearInput = () => {
    const inputs = document.querySelector(".expInputs").childNodes;
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  render() {
    return (
      <div className="experience">
        Experience
        <div className="expInputs">
          <input
            type="text"
            placeholder="Position"
            id="expPosition"
            onChange={this.props.updateExp}
          />
          <input
            type="text"
            placeholder="Company"
            id="expCompany"
            onChange={this.props.updateExp}
          />
          <input
            type="text"
            placeholder="From"
            id="expFrom"
            onChange={this.props.updateExp}
          />
          <input
            type="text"
            placeholder="To"
            id="expTo"
            onChange={this.props.updateExp}
          />
          <input
            type="text"
            placeholder="Description"
            id="expDescrip"
            onChange={this.props.updateExp}
          />
        </div>
        <button
          type="button"
          id="addExpBtn"
          onClick={(el) => {
            this.props.addExp(el);
            this.clearInput();
          }}
        >
          Add Another +
        </button>
      </div>
    );
  }
}

export default Experience;
