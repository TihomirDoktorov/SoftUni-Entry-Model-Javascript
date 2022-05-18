function function1(input){ 
    let num = Number(input[0])
    let bonus = 0;
    if(num<=100){
        bonus = 5;}
    if(num>100){
        bonus = num*0.2;
    }
    if(num>1000){
        bonus = num*0.1;
    }
    if(num%2==0){
        bonus += 1;
    } 
    else if(num%10==5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus+num);
    }
    function1(["2703"]);