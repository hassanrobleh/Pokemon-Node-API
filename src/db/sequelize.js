import { Sequelize, DataTypes } from 'sequelize'
import PokemonModel from '../models/pokemon.js'
import PokemonUser from '../models/user.js'
import pokemons from './mock-pokemon.js'
import bcrypt from 'bcrypt'

let sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(
        'fs739rhb9w9ts5hf',
        'ujfpyptvcvcwa1li',
        'tfyptadj28rklcs3',
        {
            host: 'kutnpvrhom7lki7u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            dialectOptions: {
                timezone: 'Etc/GMT-2',
            },
            logging: true,
        }
    )
} else {
    sequelize = new Sequelize('pokedax', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            timezone: 'Etc/GMT-2',
        },
        logging: false,
    })
}

export const Pokemon = PokemonModel(sequelize, DataTypes)
export const User = PokemonUser(sequelize, DataTypes)

// export const initDb = () => {
//   return sequelize.sync().then(_ => {
// console.log('INIT DB')
// pokemons.map(pokemon => {
//   Pokemon.create({
//     name: pokemon.name,
//     hp: pokemon.hp,
//     cp: pokemon.cp,
//     picture: pokemon.picture,
//     types: pokemon.types,
//   }).then(pokemon => console.log(pokemon.toJSON()))
// })

// bcrypt.hash('pikachu', 10)
// .then(hash => {
//   User.create({
//     username: 'pikachu',
//     password: hash
//   }).then(user => console.log(user.toJSON()))
// })

//     console.log('La base de donnée a bien été initialisée !')
//   })
// }

// export const initDb = () => {
//     return sequelize.sync({ force: true }).then((_) => {
//         pokemons.map((pokemon) => {
//             Pokemon.create({
//                 name: pokemon.name,
//                 hp: pokemon.hp,
//                 cp: pokemon.cp,
//                 picture: pokemon.picture,
//                 types: pokemon.types.join(),
//             }).then((pokemon) => console.log(pokemon.toJSON()))
//         })
//         console.log('La base de donnée a bien été initialisée !')
//     })
// }

export const initDb = () => {
    return sequelize.sync({force: true}).then((_) => {
        pokemons.map((pokemon) => {
            Pokemon.create({
                name: pokemon.name,
                hp: pokemon.hp,
                cp: pokemon.cp,
                picture: pokemon.picture,
                types: pokemon.types,
            }).then((pokemon) => console.log(pokemon.toJSON()))
        })

        bcrypt
            .hash('pikachu', 10)
            .then((hash) =>
                User.create({ username: 'pikachu', password: hash })
            )
            .then((user) => console.log(user.toJSON()))

        console.log('La base de donnée a bien été initialisée !')
    })
}
