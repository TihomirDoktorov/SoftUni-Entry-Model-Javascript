function greening(input) {
    let kvmeters = Number(input[0]);
    let price = (kvmeters * 7.61);
    let discount = price*0.18;
    console.log(`The final price is: ${(price - discount)} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greening([150])