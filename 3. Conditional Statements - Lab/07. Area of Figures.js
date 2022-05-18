function function1(input){
    let shape = input[0];
    let area = 0;
    if(shape == "square"){
        let sideA = Number(input[1]);
        area = sideA * sideA;
        console.log(area.toFixed(3));}
    else if (shape == "triangle"){
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = (side*height)/2;
        console.log(area.toFixed(3));}
    else if (shape == "circle"){
        let radius = Number(input[1]);
        area = radius * radius * Math.PI;
        console.log(area.toFixed(3));}
    else if (shape == "rectangle"){
        let A = Number(input[1]);
        let B = Number(input[2]);
        area = A * B;
        console.log(area.toFixed(3));}
}
function1(["triangle","4.5","20"]);