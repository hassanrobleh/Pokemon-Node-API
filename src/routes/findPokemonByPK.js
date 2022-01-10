

import {Pokemon} from '../db/squelize.js'

export const findAllPokemons = (app) => {
    app.get('/pokemon/api', (req, res) => {
        Pokemon.findByPK(req.params.id)
            .then(pokemons => {
                const message = `un pokemon a bien été trouvé`
                res.json({message, data: pokemons})
            })
    })
}