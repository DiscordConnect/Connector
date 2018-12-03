const humanize = require('time-ago')

exports.run = async (Discord, client, message, args) => {
  const base_message_url = "https://discordapp.com/channels"
  var user, id

  if (message.mentions.users.first()) {
    user = message.mentions.users.first()
    id = user.id
  } else if (args[0])
    try {
      id = args[0]
      user = await client.fetchUser(id, false)
    } catch (e) {
      return message.channel.send("Uhoh! Can't find that user (invalid ID provided)")
    }
  else return message.reply('**Usage**: lookup [user]')

  client.db.getUserReports(id).then(async (reports) => {
    let inf = reports.rows.map(r => `[Report ${r.id}](${base_message_url}/${client.config.guild_id}/${r.channelID}/${r.messageID})`).join("\n")
    var embed = new Discord.RichEmbed()
      .setDescription(`**❯ User Information**\nUser: ${user.tag}\nID: ${user.id}\nCreated: ${humanize.ago(user.createdAt)} (${user.createdAt.toUTCString()})\n\n**❯ Infractions**\n${inf ? inf : "No reports have been made on this user."}`)
      .setThumbnail(user.avatarURL)

    message.channel.send(embed)
  })

}