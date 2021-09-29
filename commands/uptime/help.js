const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discordbotlist.com/bots/uptimer-5231/upvote";
    let how_to = "https://discord.gg/zyc9vDuWpD";

    const commands = client.commands
      .filter((c) => c.ownerOnly === false)
      .map((cmd) => `**${default_prefix}${cmd.name}** - ${cmd.description}`);

    const contents =
      "**Uptimer** is an open-source project, and a free discord bot that allows you to make your projects online 24/7 just by using a single cmd.\n\n" +
      commands.sort().join("\n");

    let embed = new MessageEmbed()
      .setTitle("<a:0042:785431567924723753> Here are my comamnds!")
      .setDescription(contents)
      .setColor("RANDOM")
      .setFooter(`Prefix: "${default_prefix}"`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "Join Our Support Server",
        "[Support Server](" + how_to + ")"
      )
      .addField(
        "Vote For the Bot",
        `[Vote Here](${github_repo})`
      )
      .setTimestamp();

    return message.channel.send(embed);
  },
};
