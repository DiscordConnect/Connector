const Client = require('pg')
const Main = require('./index.js')

let config = Main.config;

let connection;

function connect(){
    connection = new Client({
        user: config.db.user,
        host: config.db.hostname,
        database: config.db.database,
        password: config.db.password,
        port: 3211,
    })
    connection.connect()
}

function addReport(reporter, category, reason, reportChannel, messageID) {
    const saveReport = {
        text: 'INSERT INTO reports(reporter,category,reason,channel_id,message_id,confirmations)'
        + 'VALUES($1, $2, $3, $4, $5, $6)',
        values: [reporter.id, category.toLowerCase(), reason, 
            reportChannel, messageID, reporter.tag]
    }
    connection.query(saveReport)
        .then(res => /*Do Stuff*/ res)
        .catch(e => /*Do Stuff*/ e)
    
    //INSERT INTO reported_users 
    //(reported_user,report_id,channel_id,message_id) 
    //VALUES (?,?,?,?)
    const saveUser = {
        //No idea how to do this one lol good luck. Heck SQL
        text: 'INSERT INTO reported_users(reported_user,report_id,channel_id,message_id)'
        + 'VALUES($1, $2, $3, $4)',
        values: []
    }
}
