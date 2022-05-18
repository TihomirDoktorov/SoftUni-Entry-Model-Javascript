function concatenate(input) {
    let name = input[0];
    let lastname = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${name} ${lastname}, a ${age}-years old person from ${town}.`);
}
concatenate(["Maria","Ivanova",20,"Sofia"]);