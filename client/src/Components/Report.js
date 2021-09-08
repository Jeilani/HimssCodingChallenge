import React from "react"
import "../CSS/Report.css"

const Report = ({data, setReports}) => {
    const {id, state, payload } = data
    const {message, reportType} = payload

    const handleBlock = e => {
        e.preventDefault()
        fetch("/api/reports/" + id, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then((data)=>{
            setReports((prevReports)=>{
                const newReports = prevReports.filter(each => each.id !== data.deleted)
                return newReports
            })
        }).catch(err=>console.log("error is ", err))
    }

    const handleResolve = e => {
        e.preventDefault()
        fetch("/api/reports/" + id, {
            method: "PUT"
        })
        .then(res=>res.json())
        .then((data)=>{
            setReports((prevReports)=>{
                const newReports = prevReports.filter(each => each.id !== data.id)
                return newReports
            })
        }).catch(err=>console.log("error is ", err))
    }

    return (
        <div className="Individual-report">
            <div>
                <span>Id: {id.substring(0, 10)}...</span>
                <span>State: {state}</span>
                <span className="fake-link">Details</span>
            </div>
            <div>
                <span>Type: {reportType}</span>
                <span>Message: {message}</span>
            </div>
            <div>
                <button className="block" onClick={handleBlock}>Block</button>
                <button className="resolve" onClick={handleResolve}>Resolve</button>
            </div>
        </div>
    )
}
export default Report