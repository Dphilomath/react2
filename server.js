require('dotenv').config()
const express = require("express"),
     mongoose = require("mongoose"),
     cors     = require("cors"),
     bodyParser =require("body-parser"),
     commentPage = require("./routes/api/comments"),
     itemsPage = require("./routes/api/items"),
     auth = require("./auth/AuthController"),
     cookieParser = require('cookie-parser'),
     path = require('path')
 


const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({"extended": true}))
app.use(bodyParser.json())
app.use(cors())



const user = process.env.USER
const pass = process.env.PASS
mongoose.connect(`mongodb+srv://${user}:${pass}@data.fee59.mongodb.net/sampleReact?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log("connected to mongo"))
    .catch(err => console.log(err))

if(process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {    res.sendFile(path.join(__dirname = 'client/build/index.html'));  })
    }
    
app.use("/api/comments/", commentPage)
app.use("/api/items", itemsPage)
app.use("/user", auth)


const port = process.env.PORT || 3000;
// const port=3000

app.listen(port, ()=>console.log(`server running on port ${port}`))

module.exports = app