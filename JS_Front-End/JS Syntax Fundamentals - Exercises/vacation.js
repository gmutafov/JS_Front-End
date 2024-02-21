function solve(count, group, day){
    let singlePrice = 0;
    if (day === 'Friday'){
        switch (group) {
            case 'Students':
                singlePrice = 8.45;
                break;
            case 'Bsiness':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                break;
        }
    } else if (day === 'Saturday'){
        switch (group) {
            case 'Students':
                singlePrice = 9.80;
                break;
            case 'Bsiness':
                singlePrice = 15.60;
                break;
            case 'Regular':
                singlePrice = 20;
                break;
        }
    } else if (day === 'Sunday'){
        switch (group) {
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Bsiness':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.50;
                break;
        }
    }

    let totalPrice = singlePrice * count;
   
    if (group === 'Students' && count >= 30){
        totalPrice *= 0.85;
    } else if (group === 'Business' && count >= 100) {
        totalPrice -= singlePrice * 10 
    } else if (group === 'Regular' && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


solve(30,
    "Students",
    "Sunday"
    );

solve(40,
    "Regular",
    "Saturday"
    );