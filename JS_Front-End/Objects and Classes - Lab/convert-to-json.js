function solve(firstName, lastName, hairColor){
    const data = {name: firstName, lastName, hairColor}
    const jsonData = JSON.stringify(data)
    console.log(jsonData)
}