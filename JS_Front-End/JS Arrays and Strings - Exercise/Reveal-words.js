function solve(word, text){
    const words = word.split(', ')
    let startIndex = -1;
    let endIndex = -1;
    
    for (let i = 0; i < text.length; i++){
        if (text[i] === '*'){
            if (startIndex < 0){
                startIndex = i;
                endIndex = i + 1;
            } else{
                endIndex = i + 1;
            }
        } else{
            if (startIndex >= 0){
                let length = endIndex - startIndex;
                let word = words.find(w => w.length === length)
                
                text = text.replace('*'.repeat(length), word);
                startIndex = -1;
                endIndex = -1;
            }
        }
    }
    if (startIndex >= 0){
        let length = endIndex - startIndex;
        let word = words.find(w => w.length === length)
        
        text = text.replace('*'.repeat(length), word);
    }
    console.log(text);
}


solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);