function solve(phones){
    let phonebook = {};
    for (let line of phones){
        let tokens = line.split(' ');
        let name = tokens[0];
        phonebook[name] = tokens[1];
    }
    for (let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)