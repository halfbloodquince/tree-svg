
import "./App.css";
import Home from "./pages/Home/Home";
import { useContext } from "react";
import Tree from "./components/Tree/Tree";
import { ContextStore } from "./context/ContextProvider";
import About from "./pages/About/About";

function App() {
  const {leavesKey} = useContext(ContextStore)
  const [leavesFallen] = leavesKey
  return (
    <div className="App">
        <Home />
        {leavesFallen &&
        <About />
        }
    </div>
  );
}

export default App;
