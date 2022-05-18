function function1(input) {
    let deposit = Number(input[0])
    let date = Number(input[1])
    let interes = Number(input[2])
    let accumulated = deposit * (interes/100)
    let month = accumulated / 12
    console.log(deposit + (date * month))
}
function1([200,3,5.7])