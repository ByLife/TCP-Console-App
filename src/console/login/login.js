const chalk = require("chalk")

module.exports = (client, socket, data) => {
    console.log(chalk.red("Data: " + data.toString()))
}