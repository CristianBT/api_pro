const express= require('express')
const app = express()

const port =process.env.PORT || 3000;

//middlewars
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes

app.use(require('./routes/index'))


//execute
 app.get('/',(req,res)=>{res.send("Welcome API-REST")})

app.listen(port)
console.log("Server Running in http://localhost:3000")  