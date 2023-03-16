const chalk = require("chalk")

module.exports = (client, socket, data) => {
    console.log("Socket: " + socket)
    console.log(chalk.grey("Data: " + data.toString()))
    console.log(chalk.red("Logged in: " + data.toString()))
    socket.emit("login", "Logged in: " + data.toString())
}