const Logger = require("../../logger")
const figlet = require("figlet")
const chalk = require("chalk")
const config = require("./../../../config.json")

module.exports = (socket) => {
    Logger.register(`New user connected from ${socket.remoteAddress}`)
    return chalk.green(figlet.textSync("Welcome", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        height: 10,
        whitespaceBreak: false
    }).replace(/\n/g, "\r\n")) + 
    Logger.space() + chalk.yellow(`Made by ${config.details.author}`) +
    Logger.space() + chalk.yellow(`Version ${config.details.version}`) +
    Logger.mediumSpace() + chalk.yellow(`Type 'help' for a list of commands`) +
    Logger.mediumSpace() + chalk.red("Redirecting...") +
    setTimeout(() => {}, 1000)

}