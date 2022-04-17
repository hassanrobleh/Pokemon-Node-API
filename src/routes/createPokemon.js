import { UniqueConstraintError, ValidationError } from 'sequelize'
import { Pokemon } from '../db/sequelize.js'
import auth from '../auth/auth.js'

const createPokemon = (app) => {
    app.post('/api/pokemons', auth, (req, res) => {
        Pokemon.create(req.body)
            .then((pokemon) => {
                const message = `Le pokémon ${req.body.name} a bien été crée.`
                res.json({ message, data: pokemon })
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    return res
                        .status(400)
                        .json({ message: error.message, data: error })
                }
                if (error instanceof UniqueConstraintError) {
                    return res
                        .status(400)
                        .json({ message: error.message, data: error })
                }
                const message = `Le pokémon n'a pas pu être ajouté. Réessayez plutard`
                res.status(500).json({ message, data: err })
            })
    })
}

export default createPokemon
