const {Sequelize} = require('sequelize')
const conf = require('../config')

const host = conf.dbHost
const user = conf.dbUser
const pass = conf.dbPassword
const db = conf.db
const drive = conf.dbDrive

const connect = new Sequelize(db, user, pass,{
    host: host,
    dialect: drive,
})

const disconnect = async ()=>{
    await connect.close()
}

module.exports = {connect, disconnect}