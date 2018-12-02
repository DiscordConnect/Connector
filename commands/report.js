exports.run = async (Discord, client, message, args) => {
  let content = message.content.split("|")
  const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g

  if (content.length !== 3)
    return message.reply(
      "**Usage**: report [ids] | [category] | [reason, proof]"
    )

  var users = content[0].trim().split(/ +/g).slice(1)
  //TODO: verify users at least are numbers
  var category = content[1].trim().toLowerCase()
  var reason = content[2].trim().replace(URL_REGEX, "<$1>").trim()
  console.log(reason)

  if (!client.config.report_types.includes(category))
    return message.channel.send(`**Invalid Category!** Valid categories: \`${client.config.report_types.join(", ")}\``)

  if (!reason || reason.length < client.config.reason_min_length)
    return message.channel.send(`**Invalid Reason!** Your report must be longer than ${client.config.reason_min_length} characters.`)

  message.attachments.forEach(a => reason += ` ${a.url}`)

  let reportChannel = client.config.report_channels[client.config.report_types.indexOf(category)]

  client.db.getLastReport().then(async (report) => {
    const confirmMsg = await message.channel.send('Preparing your report...')
    let report_id = report.rows[0] ? report.rows[0].id + 1 : 1
    let reportMsg = await client.channels.get(reportChannel).send(
      "Report **#" + report_id + "**\nReported user(s): "
      + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n"
      + reason
      + `\n\nConfirmed by ${message.author.tag}`)

    client.db.addReport(message.author.id, category, reason, reportChannel, reportMsg.id, users, [message.author.tag]).then(async (newReport) => {
      confirmMsg.edit(`Report Processed`)
    })
  })
}
