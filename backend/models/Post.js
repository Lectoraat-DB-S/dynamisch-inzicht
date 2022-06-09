const db = require('../config/db')

class Get {
    static findAll() {
        let sql = "SELECT * FROM theme"

        return db.execute(sql)
    }
}