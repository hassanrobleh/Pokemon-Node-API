import { Pokemon } from "../db/sequelize.js";

const deledePokemon = (app) => {
    app.delete('/api/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id).then(pokemon => {
            const pokemonDeleted = pokemon;
            Pokemon.destroy({
                where: { id: pokemon.id }
            })
            .then(_ => {
                const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
                res.json({message, data: pokemonDeleted })
            })
            .catch(err => {
                const message = `La liste de pokemons n'a pas pu être récupérée. Réessayez plutard.`
                res.status(500).json({message, data: err})
            })
        })
    })
}

export default deledePokemon