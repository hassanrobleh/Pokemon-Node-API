import express from 'express'
import { initDb } from './src/db/sequelize.js'
import findAllPokemons from './src/routes/findAllPokemons.js'
import findPokemonByPK from './src/routes/findPokemonByPK.js'
import createPokemon from './src/routes/createPokemon.js'
import updatePokemon from './src/routes/updatePokemon.js'
import deledePokemon from './src/routes/deletePokemon.js'
// import res from 'express/lib/response'

// import path from 'path';
// import favicon from 'serve-favicon'

const app = express()
const port = 3000


// Middleware
app.use(express.json())
   .use(express.urlencoded({ extended: true }))

initDb()

// ici, Nous plaçons nos futurs points de terminaisons.
findAllPokemons(app)
findPokemonByPK(app)
createPokemon(app)
updatePokemon(app)
deledePokemon(app)

// On ajoute la gestion des erreurs 404
app.use(({res}) => {
   const message = `Impossible de trouver la ressource demandée ! vous pouvez essayer une autre URL.`
   res.status(404).json({message})
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))