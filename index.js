function distanceFromHqInBlocks(num1) {
    if (num1 < 42) {
        return (42 - num1)
    }
    return (num1 - 42);
}

function distanceFromHqInFeet(num1) {
    return distanceFromHqInBlocks(num1) * 264;
}

function distanceTravelledInFeet(num1,num2) {
    if (num1 < num2) {
        return ((num2 - num1) * 264)
    }
    return ((num1 - num2) * 264)
}

function calculatesFarePrice(start,destination) {
    if (((start - destination) * 264) <= 400) {
        return 0;
    }
    else if (((start - destination) * 264) > 400 && ((start - destination) * 264) < 2000) {
        return ((((start - destination) * 264) - 400) * .02);
    }
    else if (((start - destination) * 264) > 2000 && ((start - destination) * 264) < 2500) {
        return 25;
    } 
    else if (((start - destination) * 264) >= 2500) {
        return 'cannot travel that far';
    }
}