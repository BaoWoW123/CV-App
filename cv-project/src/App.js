import { useState, useRef, useCallback } from "react";
import uniquid from "uniquid";
import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Overview from "./components/overview";

const App = () => {
  const [tab, setTab] = useState({});
  const [expTab, setExpTab] = useState({});
  const [eduTab, setEduTab] = useState({});
  const [general, setGeneral] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  //USED ONLY FOR GENERAL
  const updateText = (e) => {
    let input = e.target;
    let id = input.id;
    setTab((prevState) => ({
      ...prevState,
      [id]: {
        text: input.value,
        id: uniquid(),
      },
    }));
  };

  const updateTab = (el) => {
    let input = el.target;

    if (input.id.slice(0, 3) === "exp") {
      setExpTab((prevState) => ({
        ...prevState,
        expTab: {
          ...prevState.expTab,
          [input.id]: input.value,
          id: uniquid(),
        },
      }));
    } else {
      setEduTab((prevState) => ({
        ...prevState,
        eduTab: {
          ...prevState.eduTab,
          [input.id]: input.value,
          id: uniquid(),
        },
      }));
    }
  };
  const addTab = (el, key) => {
    if (key === "eduTab" || (el && el.target.id === "addExpBtn")) {
      setExperiences(experiences.concat(expTab));
      setExpTab({});
    } else if (key === "expTab" || (el && el.target.id === "addEduBtn")) {
      setEducations(educations.concat(eduTab));
      setEduTab({});
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    addTab(null, "eduTab");
    addTab(null, "expTab");
    setGeneral([
      tab.firstName,
      tab.lastName,
      tab.title,
      tab.description,
      tab.phone,
      tab.email,
    ]);
  };
  function printCv() {
    let printContents = document.querySelector(".overview").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  return (
    <div className="App">
      <div className="title">CV Creator</div>
      <form className="form" onSubmit={submitForm}>
        <General onInput={updateText} />
        <Experience updateExp={updateTab} addExp={addTab} />
        <Education updateEdu={updateTab} addEdu={addTab} />
        <div className="buttons">
          <button type="submit" className="displayFormBtn">
            Display CV
          </button>
          <button type="button" className="printBtn" onClick={printCv}>
            Print CV
          </button>
        </div>
      </form>
      <Overview props={[general, experiences, educations]} />
    </div>
  );
};

export default App;

/* const App = props => {
  const [expTab, setExpTab] = useState({});
  const [eduTab, setEduTab] = useState({});
  const [general, setGeneral] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const state = useRef();
  const updateText = useCallback(() => {
    let input = e.target;
    let id = input.id;
    setId({
      text: input.value,
      id: uniquid()
    });
  });
  const updateTab = useCallback(() => {
    let input = el.target;

    if (input.id.slice(0, 3) === "exp") {
      setExpTab(prevExpTab => {
        return { ...prevExpTab,
          [input.id]: input.value,
          id: uniquid()
        };
      });
    } else {
      setEduTab(prevEduTab => {
        return { ...prevEduTab,
          [input.id]: input.value,
          id: uniquid()
        };
      });
    }
  });
  const addTab = useCallback(() => {
    if (key === "eduTab" || el && el.target.id === "addExpBtn") {
      setExperiences(experiences.concat(expTab));
      setExpTab({});
    } else if (key === "expTab" || el && el.target.id === "addEduBtn") {
      setEducations(educations.concat(eduTab));
      setEduTab({});
    }
  });
  const submitForm = useCallback(() => {
    e.preventDefault();
    addTab(null, "eduTab");
    addTab(null, "expTab");
    setGeneral([firstName, lastName, title, description, phone, email]);
  });
  const printCv = useCallback(() => {
    let printContents = document.querySelector(".overview").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  });
  return <div className="App">
        <div className="title">CV Creator</div>
        <form className="form" onSubmit={submitForm}>
          <General onInput={updateText} />
          <Experience updateExp={updateTab} addExp={addTab} />
          <Education updateEdu={updateTab} addEdu={addTab} />
          <div className="buttons">
            <button type="submit" className="displayFormBtn">
              Display CV
            </button>
            <button type="button" className="printBtn" onClick={printCv}>
              Print CV
            </button>
          </div>
        </form>
        <Overview props={state.current} />
      </div>;
}; */
