const express = require('express')
// import express from 'express'
// import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Express'))
app.get('/api/pokemons/:id', (req, res) => {
    const id = req.params.id 
    res.send(`Vous avez demande le pokemon n° ${id}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))