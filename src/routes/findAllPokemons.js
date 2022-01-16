import { Pokemon } from '../db/sequelize.js'

const findAllPokemons = (app) => {
    app.get('/api/pokemons', (req, res) => {
        if(req.query.name) {
            const name = req.query.name
            return Pokemon.findAll({ where : {name: name}})
            .then(pokemons => {
                const message = ` Il y a ${pokemons.length} pokémons qui correspondent au terme de recherche ${name}`
                res.json({message, data: pokemons})
            })
        } else {
            Pokemon.findAll()
            .then(pokemons => {
                const message = 'La liste des pokémons a bien été récupérée.'
                res.json({ message, data: pokemons })
            })
            .catch(err => {
                const message = `Le pokémon n'a pas pu être récupéré. Réessayez plutard`
                res.status(500).json({message, data: err})
            })
        }
    })
}

export default findAllPokemons