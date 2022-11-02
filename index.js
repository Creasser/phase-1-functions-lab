// Code your solution in this file!
function distanceFromHqInBlocks(val){
    if (val > 42){
        return val - 42
    }
    else if (val < 42){
        return 42 - val
    }
}

function distanceFromHqInFeet(val){
    let someVal = distanceFromHqInBlocks(val);
    return someVal * 264
}

function distanceTravelledInFeet(start, finish){
    return (Math.abs(start - finish) * 264)
}

function calculatesFarePrice(start, finish){
        let feet = distanceTravelledInFeet(start, finish)
        if (feet <= 400){
            return 0
        }else if (feet > 400 && feet <= 2000){
            return (feet - 400) * .02
        }else if (feet > 2000 && feet <= 2500){
            return 25
        }else{
            return 'cannot travel that far'
        }
}