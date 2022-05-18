function function1(input){
    let recordSeconds = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timeSeconds = Number(input[2]);
    let seconds = distanceMetres*timeSeconds;
    let minus = Math.floor(distanceMetres/15)*12.5;
    let time = seconds + minus
    if(time>recordSeconds){
        console.log("No, he failed! He was "+(time-recordSeconds).toFixed(2)+" seconds slower.")
    }
    else console.log("Yes, he succeeded! The new world record is "+time.toFixed(2)+" seconds.")

}
function1(["55555.67","3017","5.03"]);