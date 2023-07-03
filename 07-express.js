const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    const user = {
        name: 'John',
        location: 'Nigeria'
    }
    
    res.send(user)
})

app.post('/', (req, res)=>{
    const user = {
        name: req.body.name,
        location: req.body.location
    }
    res.send(user)
})

app.listen(8000, ()=>{
    console.log('Server is running on port http://localhost:8000')
})


//middlewares
//get -> allows us to fetch data and read data
//post -> allows us to create data
//put -> allows us to update data
//delete -> allows us to delete data