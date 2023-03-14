const net = require('net');
const chalk = require('chalk');
const {dirname} = require('path');
const config = require("./../../config.json");
const Logger = require('../logger');
const fs = require('fs');

module.exports = new class Server extends net.Server {
  constructor() {
    super();
    try {
      console.log(dirname(require.main.filename) + "\\src\\events");
      this.on('connection', async socket => {
        socket.write(require("./../console/animations/welcome")(socket))
        fs.readdirSync(dirname(require.main.filename) + "\\src\\events").forEach(file => {
          const event = file.split('.')[0];
          socket.on(event, require(`./../events/${file}`).bind(null, this, socket));
        });
        if(config.application.login.enabled) await socket.on("login", require("./../console/login").bind(null, this, socket))
        
      });    
      this.listen(3000, () => {
          console.log(chalk.green('Server is listening on port 3000'));
      });
    } catch (error) {
      console.log(Logger.error(error))
    }
  }

}