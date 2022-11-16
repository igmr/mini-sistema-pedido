const conf = require('./src/config')
const app = require('./src/app')
const {connect:psql} = require('./src/database/postgresql')
const host = conf.appHost
const port = conf.appPort

const runServer = ()=>{
    app.listen(port, ()=> console.info(`Server listening in http://${host}:${port}`))
}

const dbTest = async ()=>{
    try {
        await psql.authenticate()
        console.info('Conexión exitosa')
        return 1
    } catch (error) {
        console.error('Error de conexión')
        return 0
    }
}

const main = async ()=>{
    const testConnection = await dbTest()
    if(testConnection == 1)
        runServer()
}

main()
