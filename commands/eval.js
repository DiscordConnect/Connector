exports.run = async (Discord, client, message, args) => {
  if (!message.member.roles.has(client.config.admin_role)) return

  //This snippet comes from https://anidiots.guide/examples/making-an-eval-command
  //No shame in this template, if it's good code it's good code.
  try {
    const code = args.join(" ")
    let evaled = eval(code)
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled)
    message.channel.send(client.clean(evaled), {code: "js"})
  } catch (err) {
    message.channel.send(client.clean(err), {code: "sh"})
  }
}
