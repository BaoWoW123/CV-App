import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import General from "./components/general";
import Overview from "./components/overview";

function App() {
  return (
    <div className="App">
      <div className="title">CV Creator</div>
      <div className="form">
        <General />
        <Experience />
        <Education />
      </div>
      <Overview />
      <button className="displayForm"> Display CV</button>
    </div>
  );
}

export default App;
