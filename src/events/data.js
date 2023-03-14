const chalk = require("chalk")
const gradient = require("gradient-string")
const figlet = require("figlet")
const asciify = require("asciify-image")
const chalkAnimation = require("chalk-animation")

module.exports = (client, socket, data) => {
    console.log(chalk.grey("Data: " + data.toString()))
}