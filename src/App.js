import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import Todolist from "./components/todolist";

function App() {
  const block = useSelector((state) => state.ListsReducer.todo);
  const filter = useSelector((state) => state.ListsReducer.filter);
  console.log(filter)
  return (
    <div className="App">
      <header className="App-header">
        <Todolist
          todo={ block.filter((el) =>filter==="All"? el:filter===false?el.class===false:el.class===true) }
        
        />
      </header>
    </div>
  );
}

export default App;
