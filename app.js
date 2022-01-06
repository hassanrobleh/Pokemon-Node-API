const express = require('express')
const {success} = require('./helper')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

// const logger = (req, res, next) => {
//     console.log(`URL : ${req.url}`)
// }

// app.use(logger)

// app.use((req, res, next) => {
//     console.log(`URL ${req.url}`)
// })

app.get('/', (req, res) => res.send('Hello Express'))

app.get('/api/pokemons/:id', (req, res) => {
    // console.log(pokemons)
    // res.send(`Vous avez demande le pokemon n° ${pokemon.name}`)

    const id = parseInt(req.params.id )
    const pokemon = pokemons.find((pokemon) => pokemon.id === id)  
    const message = 'Un pokemon a bie été trouvé' 
    res.json(success(message, pokemon))
})

// app.get('/api/pokemons', (req, res) => {
//     const count = pokemons.length
//     res.send(`Il y a ${count} pokemons dans le pokédox pour le moment`)
// })

app.get('/api/pokemons', (req, res) => {
    const message = 'La liste des pokemons a bien été récupérée.' 
    res.json(success(message, pokemons))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))