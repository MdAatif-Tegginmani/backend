require ('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Twitter working')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Md is here</h1>')
})


app.get('/youtube',(req,res)=>{
    res.send('<p>Drink chai everyday</p>')
})



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})


