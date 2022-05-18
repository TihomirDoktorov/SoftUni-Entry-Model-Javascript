function function1(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let add = 15;
    if (minutes>=45){
        minutes = (minutes + add - 60);
        if (hours == 23){
            hours = 0
        }
        else hours+=1;
    }
    else {
        minutes+= 15;
    }
    if(minutes<10)
    console.log(hours+":0"+minutes);
    else console.log(hours+":"+minutes);
}
function1(["23","59"]);