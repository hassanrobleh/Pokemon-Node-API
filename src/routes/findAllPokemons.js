import { Pokemon } from '../db/sequelize.js'
import { Op } from 'sequelize'
import auth from '../auth/auth.js'

const findAllPokemons = (app) => {
    app.get('/api/pokemons', auth, (req, res) => {
        if(req.query.name) {
            const name = req.query.name
            const limit = parseInt(req.query.limit) || 5

            if(name.length < 2) {
                const message = `Le terme de recherche doit contenir au moins 2 caractères.`
                res.status(400).json({message})
            }
            
            // return Pokemon.findAll({ where : {name: name}})
            // return Pokemon.findAll({ 
            return Pokemon.findAndCountAll({ 
                where: { 
                    name: {  // 'name' est la propriété du modèle pokémon
                        //[Op.eq]: name // 'name' est le critère de la recherche
                        [Op.like]: `%${name}%` // 'name' est le critère de la recherche
                    }
                },
                order: ['name'],
                limit: limit
            })
            // .then(pokemons => {
                .then(({count, rows}) => {
                    const message = ` Il y a ${count} pokémons qui correspondent au terme de recherche ${name}`
                    res.json({message, data: rows})
                })
        } else {
            Pokemon.findAll({order: ['name']})
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