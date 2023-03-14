const net = require('net');
const chalk = require('chalk');
const {dirname} = require('path');

module.exports = new class Server extends net.Server {
  constructor() {
    super();
    console.log(dirname(require.main.filename) + "\\src\\events");
    this.on('connection', socket => {
      socket.write(require("./../console/animations/welcome")(socket))
      require('fs').readdirSync(dirname(require.main.filename) + "\\src\\events").forEach(file => {
        const event = file.split('.')[0];
        socket.on(event, require(`./../events/${file}`).bind(null, this, socket));
  
        console.log(chalk.green(`Event ${event} loaded`));
      });
    });    
    this.listen(3000, () => {
        console.log(chalk.green('Server is listening on port 3000'));
    });
  }

}