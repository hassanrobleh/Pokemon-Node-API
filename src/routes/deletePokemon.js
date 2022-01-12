import { Pokemon } from "../db/sequelize.js";

const deledePokemon = (app) => {
    app.delete('/api/pokemons/', (req, res) => {
        Pokemon.findByPK(req.params.id).then(pokemon => {
            Pokemon.destroy({
                where: {id: pokemon.id}
            })
        })
        .then(_ => {
            const message = `Le pokemon avec l'identification n°${pokemon.id} a bien été supprimé.`
            res.json({message, data: pokemon})
        })
    })
}

export default deledePokemon