function petshop(input) {
    let numberDogs = Number(input[0]);
    let numberCats = Number(input[1]);
    let calculate = (input[0] * 2.50) + (input[1] * 4);
    console.log(`${calculate} lv.`);
}

petshop([13,9]);