exports.run = async (Discord, client, message, args) => {
  let content = message.content.split("|");
  const URL_REGEX = /([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=-]{2,256}\.[a-z]{2,6}|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b([-a-zA-Z0-9@:%_\+~#?&//=]*)/g

  if (content.length !== 3)
    return message.reply(
      "**Usage**: report [ids] | [category] | [reason, proof]"
    );

  var users = content[0].trim().split(/ +/g).slice(1);
  var category = content[1].trim().toLowerCase();
  var reasonBody = content[2].trim()
  var reasonStr = reasonBody.trim().replace(URL_REGEX, "")
  var reason = reasonStr
  //var proof = reasonBody.replace(URL_REGEX, "<$1>").replace(reasonStr, "").trim()
  //var reason = reasonStr + proof;
  console.log(reasonStr)

  if (!client.config.report_types.includes(category)) 
    return message.channel.send(`**Invalid Category!** Valid categories: \`${client.config.report_types.join(", ")}\``);

  if (!reason || reason.length < client.config.reason_min_length) 
    return message.channel.send(`**Invalid Reason!** Your report must be longer than ${client.config.reason_min_length} characters.`);

  message.attachments.forEach(a => reason += ` ${a.url}`)

  let reportChannel = client.config.report_channels[client.config.report_types.indexOf(category)];

  //message.channel.send("Submitting Report!")

  client.cooldown.push(message.author.id);

  setTimeout(() => {
    let index = client.cooldown.indexOf(message.author.id);
    if (index > -1) client.cooldown.splice(index, 1);
  }, 10000);
  
  //This place is a mess, Delite can handle the impl fuck that
  client.db.addReport(message.author.id, category, reason, message.channel.id, message.id, users, message.author.tag)

  /*client.db.get('SELECT report_id FROM reports ORDER BY report_id DESC', async (err, lastreport) => {
    let report_id = lastreport ? parseInt(lastreport.report_id + 1) : 1
    let msg = await client.channels.get(reportChannel).send("Report **#" + report_id + "**\nReported user(s): " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + reason + `\n\nConfirmed by ${message.author.tag}`);

    var stmt = client.db.prepare("INSERT INTO reports (reporter,category,reason,channel_id,message_id,confirmations) VALUES (?,?,?,?,?,?)");
    stmt.run(message.author.id, category, reason, reportChannel, msg.id, message.author.tag);
    stmt.finalize();

    stmt = client.db.prepare("INSERT INTO reported_users (reported_user,report_id,channel_id,message_id) VALUES (?,?,?,?)");
    users.forEach(u => stmt.run(u, report_id, reportChannel, msg.id))
    stmt.finalize();
  })*/
};
