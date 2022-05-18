function function1(input){
    let tvShowName = input[0];
    let episodeTime = Number(input[1]);
    let restTime = Number(input[2]);
    let lunchTime = restTime/8;
    let quietTime = restTime/4;
    let timeLeft = restTime - lunchTime - quietTime;
    if(timeLeft >= episodeTime){
        console.log("You have enough time to watch "+tvShowName+" and left with "+Math.ceil(timeLeft-episodeTime)+" minutes free time.")
    } 
    else console.log("You don't have enough time to watch "+tvShowName+", you need "+Math.ceil(episodeTime-timeLeft)+" more minutes.")
}
function1(["Game of Thrones","60","96"]);