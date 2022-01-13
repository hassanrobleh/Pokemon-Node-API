import { Pokemon } from '../db/sequelize.js'

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
    })
}

export default findPokemonByPk