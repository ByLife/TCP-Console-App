const chalk = require("chalk")

module.exports = (client, socket, data) => {
    socket.write(require("./../console/animations/welcome")(socket))
    console.log(chalk.grey("Data: " + data.toString()))
}