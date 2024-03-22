function caLculateDemeritPoints(speed){
    let speedlimit = 70
    let kmPerDemeritPoint = 5
    let demeritPointsThreashHold = 12
    if(speed < speedlimit){
        console.log("OK")
    }
     let excessSpeed = speed -speedlimit

     // I have used Maith.ceil so if demeritPoints ends up being in decimal points it`s rounded up

     let demeritPoints = Math.ceil(excessSpeed / kmPerDemeritPoint)

    if(demeritPoints > demeritPointsThreashHold){
        console.log("license suspended")
    }else{
        console.log(demeritPoints + "points")
    }
}

Input = "Enter car`s speed"

// converting Input to a floating number by using parseFloat

let speed = parseFloat(Input)

//function call

 caLculateDemeritPoints(speed)