

import {Pokemon} from '../db/squelize.js'

export const findAllPokemons = (app) => {
    app.get('/pokemon/api', (req, res) => {
        Pokemon.findAll()
            .then(pokemons => {
                const message = `La liste pokemon a bien été récupérée`
                res.json({message, data: pokemons})
            })
    })
}