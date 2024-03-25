function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient')
    const resultEl = document.getElementById('result')

    gradientEl.addEventListener('mousemove', (event) =>{
        // const rect = event.target.getBoundingClientRect();
        // const elWidth = rect.width
        const currentWidth = event.offsetX;
        const elWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elWidth) * 100)
        resultEl.textContent = `${progress}%`;
    })
}