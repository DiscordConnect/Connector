const humanize = require('time-ago')

exports.run = async (Discord, client, message, args) => {
  const base_message_url = "https://discordapp.com/channels"
  var user, id

  if (message.mentions.users.first()) {
    user = message.mentions.users.first()
    id = user.id
  }
  else if (args[0]) try {
    id = args[0]
    user = await client.fetchUser(id)
  } catch (e) {
    return message.channel.send("**Error**: Can't find that user (invalid ID provided)")
  }
  else return message.reply('**Usage**: lookup [user]')

  await client.db.all("SELECT * FROM reported_users WHERE reported_user = " + id, function (err, reports) {
    if (err) return message.reply("An error has occured while processing this command!")
    var inf = reports.map(r => `[Report ${r.report_id}](${base_message_url}/${client.config.guild_id}/${r.channel_id}/${r.message_id})`).join("\n")

    var embed = new Discord.RichEmbed()
      .setDescription(`**❯ User Information**\nUser: ${user.tag}\nID: ${user.id}\nCreated: ${humanize.ago(user.createdAt)} (${user.createdAt.toUTCString()})\n\n**❯ Infractions**\n${inf ? inf : "No reports have been made on this user."}`)
      .setThumbnail(user.avatarURL)

    message.channel.send(embed)
  });
}
