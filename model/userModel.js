const db = require('../config/dbConfig');

class User {
    static getAllUsers(callback) {
        db.query('SELECT * FROM users', (err, rows) => {
            if (err) throw err;
            callback(rows);
        });
    }

    // Implement other CRUD operations similarly using SQL queries
}

module.exports = User;
