module.exports = class User {
    socket;
    username;
    loggedIn;
    constructor(socket) {
        this.socket = socket;
        this.username = null;
        this.loggedIn = false;
    }
    login(username) {
    }

    logout() {
        delete this
    }
}