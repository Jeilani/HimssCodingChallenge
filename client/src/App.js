import React, {useState, useEffect} from "react"
import "./CSS/App.css"
import Report from "./Components/Report"

const App = () => {
  const [reports, setReports] = useState([])

  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spam Reports</h1>
      </header>
      <div className="reportsContainer">

      </div>
    </div>
  );
}

export default App;
