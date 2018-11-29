const { Client } = require('pg')
const config = require("../config.json")

//Turn away now, pg is a very scary thing.

var connection = new Client({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password,
    port: config.db.port
})

function connect() {
    connection.connect()

    connection.query(
        "CREATE TABLE IF NOT EXISTS reports(          \
	 \"id\" SERIAL PRIMARY KEY,               \
     \"reporter\" TEXT,                           \
     \"category\" TEXT,                           \
	 \"reason\" TEXT,                             \
	 \"channelID\" TEXT,                          \
	 \"messageID\" TEXT,                          \
	 \"reportedUsers\" TEXT[],                    \
	 \"confirmations\" TEXT[]                    \
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

function editReport(reportID, newData, msg) {
    return getReportByID(reportID).then(async (report) => {
        if (!report.rows[0]) return msg.reply("Invalid report ID.")
        if (report.rows[0].reporter != msg.author.id) return msg.reply("You can only edit your own reports.")
        const editReportQuery = {
            text: 'UPDATE reports SET reason = $2 WHERE id = $1 RETURNING *',
            values: [reportID, newData]
        }
        return connection.query(editReportQuery)
    })
}

function addConfirm(reportID, msg) {
    return getReportByID(reportID).then(async (report) => {
        if (!report.rows[0]) return msg.reply("Invalid report ID.")
        let confirmations = report.rows[0].confirmations
        if (confirmations.includes(msg.author)) return msg.reply("You\'ve already confirmed that report!")
        let confirms = confirmations.push(msg.author.tag)
        const postNewConfirm = {
            text: 'UPDATE reports SET confirmations = $1 WHERE id = $2 RETURNING *',
            values: [confirms, reportID]
        }
        return connection.query(postNewConfirm)
    })
}

function getUserReports(userID) {
    const userReports = {
        text: 'SELECT * FROM reports WHERE $1=ANY("reportedUsers")',
        values: [userID]
    }
    return connection.query(userReports)
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
    addConfirm,
    getUserReports
}