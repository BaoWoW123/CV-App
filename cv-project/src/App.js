import { Component } from "react";
import uniquid from "uniquid";
import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Overview from "./components/overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expTab: {},
      eduTab: {},
      general: [],
      experiences: [],
      educations: [],
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText = (e) => {
    let input = e.target;
    let id = input.id;
    this.setState({
      [id]: {
        text: input.value,
        id: uniquid(),
      },
    });
  };

  updateTab = (el) => {
    let input = el.target;
    if (input.id.slice(0, 3) === "exp") {
      this.setState((prevState) => ({
        expTab: {
          ...prevState.expTab,
          [input.id]: input.value,
          id: uniquid(),
        },
      }));
    } else {
      this.setState((prevState) => ({
        eduTab: {
          ...prevState.eduTab,
          [input.id]: input.value,
          id: uniquid(),
        },
      }));
    }
  };
  addTab = (el, key) => {
    if (key === "eduTab" || (el && el.target.id === "addExpBtn")) {
      this.setState({
        experiences: this.state.experiences.concat(this.state.expTab),
        expTab: {},
      });
    } else if (key === "expTab" || (el && el.target.id === "addEduBtn")) {
      this.setState({
        educations: this.state.educations.concat(this.state.eduTab),
        eduTab: {},
      });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    this.addTab(null, "eduTab");
    this.addTab(null, "expTab");
    this.setState({
      general: [
        this.state.firstName,
        this.state.lastName,
        this.state.title,
        this.state.description,
        this.state.phone,
        this.state.email,
      ],
    });
  };
  printCv() {
    let printContents = document.querySelector(".overview").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  render() {
    return (
      <div className="App">
        <div className="title">CV Creator</div>
        <form className="form" onSubmit={this.submitForm}>
          <General onInput={this.updateText} />
          <Experience updateExp={this.updateTab} addExp={this.addTab} />
          <Education updateEdu={this.updateTab} addEdu={this.addTab} />
          <div className="buttons">
            <button type="submit" className="displayFormBtn">
              Display CV
            </button>
            <button type="button" className="printBtn" onClick={this.printCv}>
              Print CV
            </button>
          </div>
        </form>
        <Overview props={this.state} />
      </div>
    );
  }
}

export default App;
