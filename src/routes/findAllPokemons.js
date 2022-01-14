import { Pokemon } from '../db/sequelize.js'

const findAllPokemons = (app) => {
    app.get('/api/pokemons', (req, res) => {
        Pokemon.findAll()
          .then(pokemons => {
            const message = 'La liste des pokémons a bien été récupérée.'
            res.json({ message, data: pokemons })
        })
        .catch(err => {
            const message = `Le pokémon n'a pas pu être récupéré. Réessayez plutard`
            res.status(500).json({message, data: err})
        })
    })
}

export default findAllPokemons