

export const success = (message, data) => {
    // Avec le raccourci de syntaxe ECMAScript6
    return { message, data }
}

export const getUniquedId = (pokemons) => {
    const pokemonIds = pokemons.map(pokemon => pokemon.id)
    const maxId = pokemonIds.reduce((a, b) => Math.max(a,b))
    const uniqueId = maxId + 1
    return uniqueId
}


