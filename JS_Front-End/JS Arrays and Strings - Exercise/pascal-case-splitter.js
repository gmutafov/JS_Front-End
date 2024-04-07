function solve(text) {
    let list = [];
    let textList = text.split('')
    for (x = 0; x<textList.length; x++) {
        let letter = textList[x]
        if (letter === letter.toUpperCase()) {
            if (word) {
                list.push(word)
            }
            var word = ''
        }
        word += letter
        if (x === textList.length-1) {
            list.push(word)
        }
    }
    console.log(list.join(', '))
}
