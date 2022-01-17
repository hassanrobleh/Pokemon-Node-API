
const PokemonUser = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    })
}

export default PokemonUser