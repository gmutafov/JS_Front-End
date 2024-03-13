function solve(input){
    const words = input.split(" ");
    const wordOccurrences = {}
    for (const word of words) {
        if (!wordOccurrences.hasOwnProperty(word.toLowerCase())){
            wordOccurrences[word.toLowerCase()] = 0
        }
        wordOccurrences[word.toLowerCase()]++;
    }

    const result = []
    for (const word in wordOccurrences) {
        if (wordOccurrences[word] % 2 !== 0){
            result.push(word)
        }
    }
    console.log(result.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')