function solve(text, word){
    let words = text.split(' ');
    let count = 0;
    for (let i of words){
        if (i === word){
            count += 1
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');