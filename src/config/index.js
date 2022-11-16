require('dotenv').config()

const config = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    db: process.env.DB_DATABASE,
    dbDrive: process.env.DB_DRIVER,

    appHost: process.env.APP_HOST,
    appPort: process.env.APP_PORT,
}

module.exports = config