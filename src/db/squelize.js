
import { Sequelize, DataTypes } from 'sequelize'
// const PokemonModel = require('../models/pokemon')
import PokemonModel from './src/models/pokemon.js'
// const pokemons = require('./mock-pokemon')
import pokemons from './src/db/mock-pokemon.js'

// const sequelize = new Sequelize('pokedex', 'root', '', {
//   host: 'localhost',
//   dialect: 'mariadb',
//   dialectOptions: {
//     timezone: 'Etc/GMT-2',
//   },
//   logging: false
// })
const sequelize = new Sequelize('pokedax', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
});
  
export const Pokemon = PokemonModel(sequelize, DataTypes)
  
export const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types.join()
      }).then(pokemon => console.log(pokemon.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}
  
// module.exports = { 
//   initDb, Pokemon
// }
// export default initDb
// export default Pokemon