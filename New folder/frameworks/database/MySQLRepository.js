// MySQLRepository.js

const mysql = require('mysql');

class MySQLRepository {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    async getUserById(userId) {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Other CRUD operations for users and products
}

module.exports = MySQLRepository;
