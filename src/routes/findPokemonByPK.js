import { Pokemon } from '../db/sequelize.js'
import auth from '../auth/auth.js'

const findPokemonByPk = (app) => {
    app.get('/api/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
         .then(pokemon => {
            if(pokemon === null) {
                const message = `Le pokemon demand' n'existe pas. Réessayez avec un autre identifiant.`
                return res.status(404).json({message})
            }
            const message = 'Un pokémon a bien été trouvé.'
            res.json({ message, data: pokemon })
          })
          .catch(err => {
            const message = `Le pokémon n'a pas pu être récupéré. Réessayez plutard`
            res.status(500).json({message, data: err})
        })
    })
}

export default findPokemonByPk