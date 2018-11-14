const { Client } = require('pg')
const config = require("../config.json")

var connection = new Client({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password
    //port: 5432
})
    
function connect(){
    connection.connect()

    connection.query(
    "CREATE TABLE IF NOT EXISTS reports(          \
	 \"id\" bigint NOT NULL DEFAULT '1',          \
     \"reporter\" bigint,                         \
     \"category\" TEXT,                           \
	 \"reason\" TEXT,                             \
	 \"channelID\" bigint,                        \
	 \"messageID\" bigint,                        \
	 \"reportedUsers\" bigint[],                  \
	 \"confirmations\" bigint[],                  \
	 CONSTRAINT reports_pk PRIMARY KEY (\"id\")   \
	 ) WITH (                                     \
	   OIDS=FALSE                                 \
	 );"
    );
}

function addReport(reporter, category, reason, reportChannelID, reportMessageID, reportedUsers, confirmations) {
    const saveReport = {
        //new format: 
        //reporter, category, reason, channel, message (direct), reported users as array, confirmations as array
        text: 'INSERT INTO reports(reporter,category,reason,channelID,messageID,reportedUsers,confirmations)'
        + 'VALUES($1, $2, $3, $4, $5, $6, $7)',
        values: [reporter, category.toLowerCase(), reason,
        reportChannelID, reportMessageID, reportedUsers, confirmations]
    }
    
    //For some reason, my IDE caused a fit until I did these brackets, alright then.
    console.log(saveReport)
    connection.query(saveReport)
      .then(res => {
        return res
      })
      .catch(e => {
        throw new Error(e)
      })
}

module.exports = {
    connect,
    addReport
}