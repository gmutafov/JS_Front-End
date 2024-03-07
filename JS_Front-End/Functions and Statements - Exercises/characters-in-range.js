function getCharacters(start, end){
    let characters= []
    for (let i = start.charCodeAt(0); i < end.charCodeAt(0); i++){
        characters.push(String.fromCharCode(i))
    }
    return characters
}

function sortChars(a, b){
    const characters = [a, b]
    characters.sort()

    return characters
}

function solve(a, b){
    const sortedCharacters = sortChars(a, b)
    const start = sortedCharacters[0]
    const end = sortedCharacters[1]
    const result = getCharacters(start, end)

    console.log(result)
}

solve('#',
':'
)