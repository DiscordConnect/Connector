exports.run = async (Discord, client, message, args) => {
  let reportID = args[0]
  let reason = args.slice(1).join(" ")
  if (!reportID || isNaN(reportID) || !reason) return message.reply("**Usage:** edit [report id] [new reason,proof]")

  client.db.editReport(reportID, 'reason', reason, message).then(async (rawReport) => {
    let report = rawReport.rows[0]
    let msg = await client.channels.get(report.channelID).fetchMessage(report.messageID)

    let users = report.reportedUsers
    msg.edit("Report **#" + report.id + "**\nReported users: " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + report.reason + `\n\nConfirmed by ${report.confirmations}`)
    message.react("✅")
  })

}
