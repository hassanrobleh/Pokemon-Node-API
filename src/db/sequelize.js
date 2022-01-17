import { Sequelize, DataTypes } from 'sequelize'
import PokemonModel from '../models/pokemon.js'
import PokemonUser from '../models/user.js'
import pokemons from './mock-pokemon.js'
import bcrypt from 'bcrypt'

const sequelize = new Sequelize('pokedax', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
});
  
export const Pokemon = PokemonModel(sequelize, DataTypes)
export const User = PokemonUser(sequelize, DataTypes)
  
export const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('INIT DB')
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types,
      }).then(pokemon => console.log(pokemon.toJSON()))
    })

    bcrypt.hash('pikachu', 10)
    .then(hash => {
      User.create({
        username: 'pikachu', 
        password: hash
      }).then(user => console.log(user.toJSON()))
    })
    
    console.log('La base de donnée a bien été initialisée !')
  })
}
  