import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="general">
        General
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Email" />
        </div>
      </div>
    );
  }
}

export default General;
