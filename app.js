import express from 'express'
import {success} from './helper.js'
import pokemons from './mock-pokemon.js'

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
    const id = parseInt(req.params.id )
    const pokemon = pokemons.find((pokemon) => pokemon.id === id)  
    const message = 'Un pokemon a bie été trouvé' 
    res.json(success(message, pokemon))
})

app.get('/api/pokemons', (req, res) => {
    const message = 'La liste des pokemons a bien été récupérée.' 
    res.json(success(message, pokemons))
})

app.post('/api/pokemons', (req, res) => {
    const id = 123
    const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `Le pokemon ${pokemonCreated} a bien été ajouté`
    res.json(success(message, pokemonCreated))
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))