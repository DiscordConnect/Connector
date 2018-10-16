exports.run = async (Discord, client, message, args) => {
  let report_id = args[0]
  let reason = args.slice(1).join(" ")
  if (!report_id || isNaN(report_id) || !reason) return message.reply("**Usage:** edit [report id] [new reason,proof]")

  var stmt = client.db.prepare('SELECT * FROM reports WHERE report_id = (?)')
  stmt.get(report_id, async (err, report) => {
    if (err) return message.reply("An error has occured while processing this command!")
    if (!report) return message.reply("**Error:** Unknown report!")

    if (report.reporter != message.author.id) return message.reply("**You can only edit your own reports.**")

    let msg = await client.channels.get(report.channel_id).fetchMessage(report.message_id)

    var upd = client.db.prepare('UPDATE reports SET reason = (?) WHERE report_id = (?)');
    upd.run(reason, report_id)
    upd.finalize()

    client.db.all(`SELECT * FROM reported_users WHERE report_id = ${report_id}`, async (err, reported) => {
      if (err) return message.reply("An error has occured while processing this command!")
      let users = reported.map(r => r.reported_user)
      msg.edit("Report **#" + report.report_id + "**\nReported users: " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + reason + `\n\nConfirmed by ${report.confirmations}`)
      message.react("✅")
    })
  })
};
