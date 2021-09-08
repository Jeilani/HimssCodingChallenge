import React, {useState, useEffect} from "react"
import "./CSS/App.css"
import Report from "./Components/Report"

const App = () => {
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch("/api/reports")
    .then(res=>res.json())
    .then(data=>setReports(data))
    .catch(err => console.log("error with fetching json line 12 in app.js"))
  }, [])

  const renderReports = reports.map(eachReport => <Report setReports={setReports} key={eachReport.id} data={eachReport}/> )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reports</h1>
      </header>
      <div className="Reports-container">
        {renderReports.length?renderReports:<div>No results</div>}
      </div>
    </div>
  );
}

export default App;
