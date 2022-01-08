import express from 'express'
import {success, getUniquedId} from './helper.js'
import pokemons from './mock-pokemon.js'

// const express = require('express')
// const { success, getUniquedId } = require('./helper.js')
// let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
    const id = getUniquedId(pokemons)
    const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    
    const message = `Le pokemon ${pokemonCreated.name} a bien été ajouté`
    res.json(success(message, pokemonCreated))
})

app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body 
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const pokemonUpdated = pokemons.map(pokemon => {
        if(pokemon.id === id) {
            pokemon.name = name
        }
        return pokemon
    })
    
    const message = `Le pokemon ${pokemon.name} a bien été modifié`
    res.json(success(message, pokemonUpdated))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))