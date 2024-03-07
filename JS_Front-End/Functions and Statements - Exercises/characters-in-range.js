function solve(a, b){
    function getCharactersBetween(start, end){
    let characters = []
    for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++){
        characters.push(String.fromCharCode(i))
    }
    return characters
}

function getSortedCharacters(a, b){
    const characters = [a, b]
    characters.sort()
    return characters
}

    const sortedCharacters = getSortedCharacters(a, b)
    const start = sortedCharacters[0];
    const end = sortedCharacters[1]

    const result = getCharactersBetween(start, end)
    console.log(result.join(' '))
}

solve('a', 'd')