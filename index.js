const express= require('express')
const app = express()

//middlewars
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes

app.use(require('./routes/index'))


//execute
 app.get('/',(req,res)=>{res.send("Welcome API-REST")})

app.listen(3000)
console.log("Server Running in http://localhost:3000")  