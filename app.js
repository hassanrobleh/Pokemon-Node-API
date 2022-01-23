import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import { initDb } from './src/db/sequelize.js'
import cors from 'cors'
import findAllPokemons from './src/routes/findAllPokemons.js'
import findPokemonByPK from './src/routes/findPokemonByPK.js'
import createPokemon from './src/routes/createPokemon.js'
import updatePokemon from './src/routes/updatePokemon.js'
import deledePokemon from './src/routes/deletePokemon.js'
import login from './src/routes/login.js'

const app = express()
const port = process.env.PORT || 3000
const __dirname = path.resolve();

// Middleware
app.use(favicon(path.join(__dirname, 'favicon.ico')))
   .use(express.json())
   .use(express.urlencoded({ extended: true }))
   .use(cors())

initDb()

app.get('/', (req, res) => {
   res.json('Hello Heroku')
})

// ici, Nous plaçons nos futurs points de terminaisons.
findAllPokemons(app)
findPokemonByPK(app)
createPokemon(app)
updatePokemon(app)
deledePokemon(app)
login(app)


// On ajoute la gestion des erreurs 404
app.use(({res}) => {
   const message = `Impossible de trouver la ressource demandée ! vous pouvez essayer une autre URL.`
   res.status(404).json({message})
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))