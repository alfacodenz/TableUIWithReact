// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// fake db
import data from "./data/data.json";

// react hooks
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState(data);
  console.log(employees);

  return (
    <div className="App">
      <h1 className="display-1">Hello table</h1>
    </div>
  );
}

export default App;
