function smallCapital(params){
    let step1 = params.split('');
    let step2 = step1.length;
    let countA= 0;
    let counta= 0;

    for(let repeat of step1){
        if(repeat == 'a'){
            counta += 1;
        }else if(repeat == 'A'){
            countA += 1
        }
    }

    console.log(`the small letter a has-${counta} times & the capital letter A has-${countA} times`);
}

smallCapital('I Am practicing javAscript to find small And capitAll letter');