const mongoose = require("mongoose")

const ReportsSchema = new mongoose.Schema({
	id: String,
	date: Date,
	payload: {
		source: String,
		reportType: String,
        message: String,
        reportId: String
	},
    state: String
})

const Reports = mongoose.model("Reports", ReportsSchema)

module.exports = Reports