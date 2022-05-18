function function1(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let add = n1+n2;
    let subtract = n1-n2;
    let multiply = n1*n2;
    let divide = (n1/n2).toFixed(2);
    let module = n1%n2;
    let operator = input[2];

    switch (operator){
        case "+":
            if(add%2==0){
                console.log(`${n1} + ${n2} = ${add} - even`);
                break;
            }
            else {
                console.log(`${n1} + ${n2} = ${add}} - odd`);
                break;
            }
        case "-":
            if(subtract%2==0){
                console.log(`${n1} - ${n2} = ${subtract} - even`);
                break;
            }
            else {
                console.log(`${n1} - ${n2} = ${subtract} - odd`);
                break;
            }
        case "*":
            if(multiply%2==0){
                console.log(`${n1} * ${n2} = ${multiply} - even`);
                break;
            }
            else {
                console.log(`${n1} * ${n2} = ${multiply} - odd`);
                break;
            }
        case "/":
            if(n2==0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
                console.log(`${n1} / ${n2} = ${divide}`);
                break;
        case "%":
            if(n2==0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
                console.log(`${n1} % ${n2} = ${module}`);
                break;
    }
}
function1(["10","12","+"]);