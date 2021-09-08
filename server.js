const express = require('express')
const app = express()
const path = require('path')
const config = require('config')
const db = config.get('mongoURI')
const mongoose = require('mongoose')
const Reports = require('./models/index.js')

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
   console.log("connected to database")
}).catch(err=>{
    console.log("There is an error with connecting to the database", err)
})

app.get("/api/reports", (req, res)=>{
    Reports.find({state: "OPEN"}).then(data => res.json(data)).catch(err => res.status(404).json({success: false}))
})


app.put("/api/reports/:reportId", (req, res)=>{
    Reports.findOneAndUpdate({id: req.params.reportId}, {state: "CLOSED"}, {new: true})
    .then(item =>{
        res.json(item)
        console.log("item is ", item)
    })
    .catch(err=>{
        res.status(404).json({success: false})
    })
})

app.delete("/api/reports/:reportId", (req, res) => {
    const objectId = req.params.reportId

    Reports.deleteOne({id: objectId})
    .then(item =>{
        res.json({deleted: objectId})
    })
    .catch(err=>{
        res.status(404).json({success: false})
    })
})

app.use(express.static('client/build'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(3001 , function (req, res) {
    console.log("himss coding challenge Server has started");
});