function solve() {
    const outputEl = document.getElementById('output')
    const textareaEl = document.getElementById('input');
    const text = textareaEl.value;

    const result = text.split('.').filter(sentence => !!sentence).reduce((result, sentence, i) => {
        const resultIndex = Math.floor(i/3);
        if (!resultIndex){
            result[resultIndex] = []
        }
        result[resultIndex].push(sentence.trim());
        return result;
    }, []).map(sentences => `<p>${sentences.join('. ')}</p>`).join('\n');
    outputEl.innerHTML = result;
}