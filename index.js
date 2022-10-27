// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    if (distance > 42 )
    return (distance - 43 ) + 1
else if (distance < 42) 
    return (distance * (-1)) + 42
}



function distanceFromHqInFeet(distance){
    let feet =264
return distanceFromHqInBlocks(distance) * feet;
}

function distanceTravelledInFeet(start, destination){
    return  Math.abs(start - destination) * 264
}


function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start,destination) 
    if (totalDistance <= 400){
        return 0
    }
    else if  (totalDistance > 400 && totalDistance <= 2000){
        return (totalDistance - 400) * .02
    } 
    else if (totalDistance > 2000 && totalDistance < 2500){
        return 25
    }
    else (totalDistance > 2500);{
        return 'cannot travel that far'
    }
}