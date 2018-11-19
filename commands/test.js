exports.run = async (Discord, client, message, args) => {
  if (!message.member.roles.has(client.config.admin_role)) return

  client.db.getLastReport().then(report => {
    console.log(report.rows[0].id)
  })
  client.db.getReportByID(args[0]).then(report => {
    message.channel.send(report.rows[0].reason)
  })
}
