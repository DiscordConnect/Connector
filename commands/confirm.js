exports.run = async (Discord, client, message, args) => {
  let reportID = args[0]

  if (!reportID || isNaN(reportID)) return message.reply("**Usage:** confirm [report id]")

  client.db.addConfirm(reportID, message).then(async (rawReport) => {
    let report = report.rows[0]
    let msg = await client.channels.get(report.reportChannelID).fetchMessage(report.reportMessageID)
    let users = report.reportedUsers

    msg.edit("Report **#" + report.id + "**\nReported users: " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + report.reason + `\n\nConfirmed by ${report.confirmations}`)
    message.react("✅")
  }).catch(e => {
    message.channel.send('Uhoh! ' + e)
  })
}