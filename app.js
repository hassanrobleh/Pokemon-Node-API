import express from 'express'
import favicon from 'serve-favicon'
import sequelize from './src/db/squelize.js'
// import { DataTypes, Sequelize } from 'sequelize'
// import {success, getUniquedId} from './helper.js'
// import pokemons from './src/db/mock-pokemon.js'
// import PokemonModel from './src/models/pokemon.js'

// const express = require('express')
// const { success, getUniquedId } = require('./helper.js')
// let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

// const sequelize = new Sequelize(
//     'pokedax',
//     'root',
//     'root',
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//             timezone: 'Etc/GMT-2'
//         },
//         logging: false
//     }
// );

// sequelize.authenticate()
//     .then(_ => console.log('La connexion à la base de données a bien été établie.'))
//     .catch(error => console.log(`Impossible de se connecter à la base de données ${error}`))

// const Pokemon = PokemonModel(sequelize, DataTypes)

// sequelize.sync({force: true})
//     .then(_ => {
//         console.log('La base de données "Pokedex" a bien été synchronisée.')

//         pokemons.map(pokemon => {

//             Pokemon.create({
//                 name: pokemon.name,
//                 hp: pokemon.hp,
//                 cp: pokemon.cp,
//                 picture: pokemon.picture,
//                 types: pokemon.types.join(),
//             }).then(bulbizarre => console.log(bulbizarre.toJSON()))
//         })
//     })


// Middleware
app.use(favicon(__dirname + 'favicon.ico'))
   .use(express.json())
   .use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => res.send('Hello Express'))

// app.get('/api/pokemons/:id', (req, res) => {
//     const id = parseInt(req.params.id )
//     const pokemon = pokemons.find((pokemon) => pokemon.id === id)  
//     const message = 'Un pokemon a bie été trouvé' 
//     res.json(success(message, pokemon))
// })

// app.get('/api/pokemons', (req, res) => {
//     const message = 'La liste des pokemons a bien été récupérée.' 
//     res.json(success(message, pokemons))
// })

// app.post('/api/pokemons', (req, res) => {
//     const id = getUniquedId(pokemons)
//     const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
//     pokemons.push(pokemonCreated)

//     const message = `Le pokemon ${pokemonCreated.name} a bien été ajouté`
//     res.json(success(message, pokemonCreated))
// })

// app.put('/api/pokemons/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     // const pokemonUpdated = {...req.body}
//     const {name} = req.body
//     let pokemon = pokemons.find(pokemon => pokemon.id === id)
//     const pokemonUpdated = pokemons.map(pokemon => {
//         if(pokemon.id === id) {
//             pokemon.name = name
//         }
//         return pokemon
//     })
//     const message = `Le pokemon ${pokemon.name} a bien été modifié`
//     res.json(success(message, pokemonUpdated))
// })

// app.delete('/api/pokemons/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const pokemonDelete = pokemons.find(pokemon => pokemon.id === id)
//     pokemons.filter(pokemon => pokemon.id !== id)

//     const message = `Le pokemon ${pokemonDelete.name} a bien été supprimé`
//     res.json(success(message, pokemonDelete))
// })

sequelize.initDb()

// ici, Nous plaçons nos futurs points de terminaisons.

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))