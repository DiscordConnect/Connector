exports.run = async (Discord, client, message, args, db, config, cooldown) => {
  let content = message.content.split("|");

  if (cooldown.includes(message.author.id))
    return message.reply(
      "**This commmand is on cooldown!** Please try again in a moment."
    );
  if (content.length !== 3)
    return message.reply(
      "**Usage**: report [ids] | [category] | [reason, proof]"
    );

  var users = content[0].trim().split(/ +/g).slice(1);
  var category = content[1].trim();
  var reason = content[2].trim();

  // todo: add id validation

  if (!config.report_types.includes(category.toLowerCase())) return message.channel.send(`**Invalid report category!** Valid options are: \`${config.report_types.join(", ")}\``);

  if (!reason || reason.length < config.reason_min_length) return message.channel.send(`**Invalid report reason!** Your report proof and reason must be longer than ${config.reason_min_length} characters.`);

  message.attachments.forEach(a => reason += ` ${a.url}`)

  let reportChannel = config.report_channels[config.report_types.indexOf(category.toLowerCase())];

  message.channel.send("✅ Report submitted.");

  cooldown.push(message.author.id);

  setTimeout(() => {
    let index = cooldown.indexOf(message.author.id);
    if (index > -1) cooldown.splice(index, 1);
  }, 10000);

  db.get('SELECT report_id FROM reports ORDER BY report_id DESC', async (err, lastreport) => {
    let report_id = lastreport ? parseInt(lastreport.report_id + 1) : 1
    let msg = await client.channels.get(reportChannel).send("Report **#" + report_id + "**\nReported users: " + users.map(u => `<@${u}> (\`${u}\`) `).join(", ") + "\n\n" + reason + `\n\nConfirmed by ${message.author.tag}`);

    var stmt = db.prepare("INSERT INTO reports (reporter,category,reason,channel_id,message_id,confirmations) VALUES (?,?,?,?,?,?)");
    stmt.run(message.author.id, category.toLowerCase(), reason, reportChannel, msg.id, message.author.tag);
    stmt.finalize();

    stmt = db.prepare("INSERT INTO reported_users (reported_user,report_id,channel_id,message_id) VALUES (?,?,?,?)");
    users.forEach(u => stmt.run(u, report_id, reportChannel, msg.id))
    stmt.finalize();
  })
};
