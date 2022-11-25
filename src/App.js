import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { MyComponent } from "./MyComponent";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <User name="Zartab Nakhwa" />
      <hr />
      <MyComponent />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
