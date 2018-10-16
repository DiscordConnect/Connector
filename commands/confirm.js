exports.run = async (Discord, client, message, args) => {
  let report_id = args[0]

  if (!report_id || isNaN(report_id)) return message.reply("**Usage:** confirm [report id]")

  var stmt = client.db.prepare('SELECT * FROM reports WHERE report_id = (?)')
  stmt.get(report_id, async (err, report) => {
    if (err) return message.reply("An error has occured while processing this command!")
    if (!report) return message.reply("**Error:** unknown report!")
    let msg = await client.channels.get(report.channel_id).fetchMessage(report.message_id)
    if (report.confirmations.includes(message.author.tag)) return message.reply("**You've already confirmed this report.** No need to do it again! :)")

    client.db.run(`UPDATE reports SET confirmations = "${report.confirmations}, ${message.author.tag}" WHERE report_id = ${report_id}`)
    client.db.all(`SELECT * FROM reported_users WHERE report_id = ${report_id}`, async (err, reported) => {
      if (err) return message.reply("An error has occured while processing this command!")
      let users = reported.map(r => r.reported_user)
      msg.edit("Report **#" + report.report_id + "**\nReported users: " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + report.reason + `\n\nConfirmed by ${report.confirmations}, ${message.author.tag}`)
      message.react("✅")
    })
  })
};