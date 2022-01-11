import { Pokemon } from '../db/sequelize.js'

const findAllPokemons = (app) => {
    app.get('/api/pokemons', (req, res) => {
        Pokemon.findAll()
          .then(pokemons => {
            const message = 'La liste des pokémons a bien été récupérée.'
            res.json({ message, data: pokemons })
        })
        .catch(err => console.log(err))
    })
}

export default findAllPokemons