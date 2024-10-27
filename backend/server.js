import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://michaeldvogt01:bob@cluster0.ingqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    //useNewUrlParser:true,
    //useCreateIndex: true,
    //useUnifiedTopology:true
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Test"))

app.post('/test/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard)
    .then(result => {
        console.log(result)
        res.status(200).send(dbCard);
    })
})

app.get('/test/cards', Cors(), (req, res) => {
    Cards.find(req.body) 
    .then(result => {
        console.log(result)
        res.status(200).send(result);


    })
    
    
    
    
})




//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
