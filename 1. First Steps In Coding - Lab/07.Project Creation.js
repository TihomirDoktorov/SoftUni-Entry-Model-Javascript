function project(input) {
    let name = String(input[0]);
    let number = Number(input[1]);
    let hours = number * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${number} project/s.`)
}
project(["George","4"]);