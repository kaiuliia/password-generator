import logo from "./assets/images/icon-check.svg";
import "./App.css";
import { Settings } from "./Components/settings/settings";
import { Output } from "./Components/settings/output";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Password Generator</p>
      </header>
      <div className="Form">
        <div className="Output">
          <Output />
        </div>

        <div className="Settings">{<Settings />}</div>
      </div>
    </div>
  );
};

export default App;
