const express = require('express')
const cors = require('cors')

const app = express()

//cors
app.use(cors({
    origin: '*'
}))


const bookStore = [
    {
        id: 1,
        title: 'Histories',
        image: 'https://th.bing.com/th/id/OIP.92phRAaYqT1A8ZR75birUgHaLE?pid=ImgDet&rs=1',
        genres: ['History', 'Biographys']
    },
    {
        id: 2,
        title: 'The library book',
        image: 'https://th.bing.com/th/id/R.3eeba82f4a34f7b8fbb32ce41f8e9920?rik=XTKK8rxuvAO0uQ&pid=ImgRaw&r=0',
        genres: ['Adventure', 'Fantasy']
    }
]




app.get('/', (req, res)=>{
    res.send(bookStore)
})

app.listen(8080, ()=>{
    console.log('Server is running on http://localhost:8080')
})




///CRUD
//C- Create
//R - Read
//U - Update
//D - Delete