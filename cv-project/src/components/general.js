import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general">
        General
        <div>
          <input
            type="text"
            placeholder="First name"
            id="firstName"
            onChange={this.props.onInput}
          />
          <input
            type="text"
            placeholder="Last name"
            id="lastName"
            onChange={this.props.onInput}
          />
          <input
            type="text"
            placeholder="Title"
            id="title"
            onChange={this.props.onInput}
          />
          <input
            type="text"
            placeholder="Description"
            id="description"
            onChange={this.props.onInput}
          />
          <input
            type="tel"
            placeholder="Phone number"
            id="phone"
            onChange={this.props.onInput}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={this.props.onInput}
          />
        </div>
      </div>
    );
  }
}

export default General;
