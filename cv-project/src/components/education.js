import React from "react";

const Education = (props) => {
  const clearInput = () => {
    const inputs = document.querySelector(".eduInputs").childNodes;
    inputs.forEach((input) => {
      input.value = "";
    });
  };
  return (
    <div className="education">
      Education
      <div className="eduInputs">
        <input
          type="text"
          placeholder="Degree"
          id="eduDegree"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="City"
          id="eduCity"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="State"
          id="eduState"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="Name of college"
          id="eduCollege"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="From"
          id="eduFrom"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="To"
          id="eduTo"
          onChange={props.updateEdu}
        />
        <input
          type="text"
          placeholder="GPA"
          id="eduGpa"
          onChange={props.updateEdu}
        />
      </div>
      <button
        type="button"
        id="addEduBtn"
        onClick={(el) => {
          props.addEdu(el);
          clearInput();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Education;
