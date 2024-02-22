function solve(km, road){
    let speedLimit = 0;
    
    switch(road){
        case 'motorway':
        speedLimit = 130;
        break;
        case 'interstate':
        speedLimit = 90;
        break;
        case 'city':
        speedLimit = 50;
        break;
        
        case 'residential':
        speedLimit = 20;
        break;
        
    }
    const speedDiff = km - speedLimit;
    
    if (speedDiff <= 0){
        return console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
    }
    let status = '' 
    if (speedDiff <= 20){
        status = 'speeding';
    } else if (speedDiff <= 40){
        status = 'excessive speeding';
    } else{
        status = 'reckless driving';
    }
    
    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}


solve(70, 'city');
