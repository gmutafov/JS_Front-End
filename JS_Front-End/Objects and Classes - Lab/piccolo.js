function solve(input){
    const parking = new Set();
    for (const row of input) {
        const [direction, carNUmber] = row.split(', ')

        direction === 'IN'
            ? parking.add(carNUmber)
            : parking.delete(carNUmber)
    }
    if (parking.size < 1){
        return console.log('Parking Lot is Empty')
    }
    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car))
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);