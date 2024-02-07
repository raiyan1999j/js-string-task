function countString(params){
    let step1 = params.split('');
    let step2 = step1.length;
    let count = 0;

    for(let repeat=0; repeat<step2; repeat++){
        if(step1[repeat] == 'a'){
            count +=1;
        }
    }
    console.log(count);
}

countString('I am alpha male John cena');