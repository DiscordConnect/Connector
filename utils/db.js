const { Client } = require('pg')
const config = require("../config.json")

//Turn away now, pg is a very scary thing.

var connection = new Client({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password
})
    
function connect(){
    connection.connect()

    connection.query(
    "CREATE TABLE IF NOT EXISTS reports(          \
	 \"id\" TEXT NOT NULL DEFAULT '1',            \
     \"reporter\" TEXT,                           \
     \"category\" TEXT,                           \
	 \"reason\" TEXT,                             \
	 \"channelID\" TEXT,                          \
	 \"messageID\" TEXT,                          \
	 \"reportedUsers\" TEXT[],                    \
	 \"confirmations\" TEXT[],                    \
	 CONSTRAINT reports_pk PRIMARY KEY (\"id\")   \
	 ) WITH (                                     \
	   OIDS=FALSE                                 \
	 );"
    );
}

function addReport(reporter, category, reason, reportChannelID, reportMessageID, reportedUsers, confirmations) {
    const saveReport = {
        text: 'INSERT INTO reports(reporter,category,reason,\"channelID\",\"messageID\",\"reportedUsers\",confirmations)'
        + ' VALUES($1, $2, $3, $4, $5, $6, $7)',
        values: [reporter, category.toLowerCase(), reason,
        reportChannelID, reportMessageID, reportedUsers, confirmations]
    }
    return connection.query(saveReport)
}

function getLastReport() {
    const lastQuery = {
        text: 'SELECT id FROM reports ORDER BY id DESC'
    }
    return connection.query(lastQuery)
}

function getReportByID(reportID) {
    const lastQuery = {
        text: 'SELECT * FROM reports WHERE id = $1',
        values: [reportID]
    }
    return connection.query(lastQuery)
}

function editReport(reportID, field, newData) {
    const editReportQuery = {
        text: 'UPDATE reports SET ' + field + ' = $1 WHERE id = $2 RETURNING *',
        values: [newData, reportID]
    }
    return connection.query(editReportQuery)
}

function addConfirm(reportID, field, newUser) {
    getReportByID(reportID).then(async (report) => {
        if (report.rows[0].confirmations.contains(newUser)) return false
        let confirms = report.rows[0].confirmations.push(newUser)
        const postNewConfirm = {
            text: 'UPDATE reports SET confirmations = $1 FROM reports WHERE id = $2',
            values: [confirms, reportID]
        }
        return connection.query(postNewConfirm)
    })
}

function query(rawSQL) {
    const rawQuery = {
        text: rawSQL
    }
    return connection.query(rawQuery)
}

module.exports = {
    connect,
    addReport,
    getLastReport,
    getReportByID,
    editReport,
    addConfirm
}