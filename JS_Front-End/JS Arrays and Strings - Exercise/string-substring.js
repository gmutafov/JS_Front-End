function findWord(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();


    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {

        if (words[i] === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}
