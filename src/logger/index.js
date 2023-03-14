const chalk = require("chalk")
const fs = require("fs")

module.exports = class Logger {
    static success = (message) => { return chalk.green(`[SUCCESS] [${new Date().toUTCString()}] ${message}`) }
    static error = (message) => { return chalk.red(`[ERROR] [${new Date().toUTCString()}] ${message}`) }
    static warn = (message) => { return chalk.yellow(`[WARN] [${new Date().toUTCString()}] ${message}`) }
    static info = (message) => { return chalk.blue(`[INFO] [${new Date().toUTCString()}] ${message}`)}
    static debug = (message) => { return chalk.grey(`[DEBUG] [${new Date().toUTCString()}] ${message}`) }
    static space = () => { return "\r\n" }	
    static mediumSpace = () => { return "\r\n\r\n\r\n" }

    static register= (message, type = "success" || "error" || "warn" || "info" || "debug") => { 
        message = Logger[type](message)
        fs.appendFile("./logs/log.txt", message + "\n", (err) => {
            if (err) console.error(err)
        })
     }
}