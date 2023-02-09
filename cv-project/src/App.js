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
      general: [],
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

  submitForm = (e) => {
    e.preventDefault();
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
    console.log("sent form");
  };

  render() {
    return (
      <div className="App">
        <div className="title">CV Creator</div>
        <form className="form" onSubmit={this.submitForm}>
          <General onInput={this.updateText} />
          <Experience />
          <Education />
          <button type="submit" className="displayForm">
            {" "}
            Display CV
          </button>
        </form>
        <Overview props={this.state} />
      </div>
    );
  }
}

export default App;
