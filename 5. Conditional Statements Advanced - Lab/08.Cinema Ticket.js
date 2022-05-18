function function1(input){
    let day = input[0];
    if(day == "Monday" || day == "Tuesday"  || day == "Friday")console.log("12");
    else if (day == "Wednesday" || day == "Thursday")console.log("14");
    else if (day == "Monday" || day == "Tuesday")console.log("12");
    else console.log("16")
}