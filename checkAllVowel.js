function vowels(params){
    const step1 = params.toLowerCase().split('');
    const step1Len= step1.length;
    const container=['a','e','i','o','u'];
    const containerLen= container.length;
    const arr =[];
    let hold = [];

    for(let i=0; i<step1Len; i++){
        for(let a=0;a<containerLen; a++){
            if(step1[i] == container[a]){
                arr.push(container[a])
            }
        }
    }

    for(let repeat=0;repeat<containerLen; repeat++){
        if(!arr.includes(container[repeat])){
            hold.push(container[repeat])
        }
    }

    console.log(`the matching words are -${arr} & not match words are -${hold}`);
}

vowels('I am hello world');