const pgPromise = require ('pg-promise')
const config={
    host:'localhost',
    port:'5432',
    database:'pizza-app',
    user:'postgres',
    password:'cristian'
}
const pgp=pgPromise({})
const db=pgp(config)


exports.db=db;