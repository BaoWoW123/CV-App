import React from "react";

const General = (props) => {
  return (
    <div className="general">
      General
      <div>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          onChange={props.onInput}
        />
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          onChange={props.onInput}
        />
        <input
          type="text"
          placeholder="Title"
          id="title"
          onChange={props.onInput}
        />
        <input
          type="text"
          placeholder="Description"
          id="description"
          onChange={props.onInput}
        />
        <input
          type="tel"
          placeholder="Phone number"
          id="phone"
          onChange={props.onInput}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={props.onInput}
        />
      </div>
    </div>
  );
};

export default General;
