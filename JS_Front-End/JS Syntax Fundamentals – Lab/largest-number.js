function max_num(a, b, c){
    let result;
    if (a > b && a > c){
        result = a
    }else if (b > a && b > c){
        result = b
    }else if (c > a && c > b){
        result = c
    }
    console.log(`The largest number is ${result}.`);
}

max_num(5, -3, 16)
max_num(-3, -5, -22.5)