import express from 'express'

const app = express()
app.use(express.json())


app.post('/turma', (req, res) => {
    console.log(req.body)
    res.send('Deu bom')
});



app.get('/turma', (req, res) => {
    console.log(req)
    res.send('ta travando')
});