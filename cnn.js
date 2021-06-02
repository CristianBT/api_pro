const pgPromise = require ('pg-promise')
const config={
    host:'ec2-34-230-115-172.compute-1.amazonaws.com',
    port:'5432',
    database:'dco2ghhel0sn8',
    user:'nvidbtwusdiwoo',
    password:'f8f05be8fa9cd03d41c0955bd7e1559c61b5cf090dbfd1f113455502ca012115'
}
const pgp=pgPromise({})
const db=pgp(config)


exports.db=db;