function function1(input){
    let duljina = Number(input[0]);
    let shiro4ina = Number(input[1]);
    let viso4ina = Number(input[2]);
    let percent = Number(input[3])/100;
    let obem = duljina * shiro4ina * viso4ina;
    let obemLitri = obem / 1000;
    console.log(obemLitri * (1 - percent ));
}
function1(["85","75","47","17"]);