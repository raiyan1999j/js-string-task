function replaceString(params){
    const step1 = params.split('');
    const len = step1.length;

    for(let count=0; count<len; count++){
        if(step1[count] == 'a'){
            step1[count] = 'Y'
        }else if(step1[count] == 'A'){
            step1[count] = 'y'
        }else if(step1[count] == 'y'){
            step1[count] = 'A'
        }else if(step1[count] == 'Y'){
            step1[count] = 'a'
        }
    }

    console.log(step1.join(''));
}

replaceString('I am very poor And I Am doing gYm')