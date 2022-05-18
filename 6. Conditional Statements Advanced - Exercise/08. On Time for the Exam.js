function function1(input){
let exam_hour = int(input(0));
let exam_minute = int(input(1));
let arrive_hour = int(input(2));
let arrive_minute = int(input(3));

let exam_total_minutes = exam_hour * 60 + exam_minute
let arrive_total_minutes = arrive_hour * 60 + arrive_minute

if (arrive_total_minutes > exam_total_minutes){
    console.log(`Late`);
}
else if ((exam_total_minutes - arrive_total_minutes) <= 30){
    console.log("On time");
}
else{
    console.log("Early");
}

let result = abs(exam_total_minutes - arrive_total_minutes);

if (exam_total_minutes - arrive_total_minutes > 0)
    if (result < 60)
        console.log(`${result} minutes before the start`);
    else{
        console.log(`${result/60}:${result % (60:02d)} hours before the start`)
    }
elif arrive_total_minutes - exam_total_minutes > 0:
    if result < 60:
        print(f"{result} minutes after the start")
    else:
        print(f"{result // 60}:{result % 60:02d} hours after the start")
}