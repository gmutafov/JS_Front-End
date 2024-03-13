function solve(currStock, orderedProducts){
    const store = {};

    for (let i = 0; i < currStock.length; i += 2){
        const product = currStock[i]
        const quantity = Number(currStock[i + 1])

        store[product] = quantity
    }

    for (let i = 0; i < orderedProducts.length; i += 2){
        const product = orderedProducts[i]
        const quantity = Number(orderedProducts[i + 1])

    if (!store[product]){
        store[product] = 0
    }
        store[product] += quantity
    }
    for (const product in store){
        console.log(`${product} -> ${store[product]}`)
    }
}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)