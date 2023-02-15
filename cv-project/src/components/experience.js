import React from "react";

const Experience = (props) => {
  const clearInput = () => {
    const inputs = document.querySelector(".expInputs").childNodes;
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="experience">
      Experience
      <div className="expInputs">
        <input
          type="text"
          placeholder="Position"
          id="expPosition"
          onChange={props.updateExp}
        />
        <input
          type="text"
          placeholder="Company"
          id="expCompany"
          onChange={props.updateExp}
        />
        <input
          type="text"
          placeholder="From"
          id="expFrom"
          onChange={props.updateExp}
        />
        <input
          type="text"
          placeholder="To"
          id="expTo"
          onChange={props.updateExp}
        />
        <input
          type="text"
          placeholder="Description"
          id="expDescrip"
          onChange={props.updateExp}
        />
      </div>
      <button
        type="button"
        id="addExpBtn"
        onClick={(el) => {
          props.addExp(el);
          clearInput();
        }}
      >
        Add Another +
      </button>
    </div>
  );
};

export default Experience;
