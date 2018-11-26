exports.run = async (Discord, client, message, args) => {
  if (!message.member.roles.has(client.config.admin_role)) return

  client.db.getReportByID(args[0]).then(report => {
    console.log(Array.isArray(report.rows[0].confirmations))
  })
}
