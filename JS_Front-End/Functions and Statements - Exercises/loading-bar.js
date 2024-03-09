function solve(bar) {
    const renderProgressBar = (progress) => `[${'%'.repeat(progress / 10)}${'.'.repeat(10 - progress / 10)}]`
    const renderProgress = (progress) => `${bar}% ${renderProgressBar(progress)}`
    const isCompleted = bar === 100;
    console.log(renderProgress(bar))
    console.log(isCompleted ? 'Complete' : 'Still loading...')
}

solve(30)
solve(100)
solve(1)
solve(99)
solve(12)