function capitalize(params){
    const step1 = params.split(" ");
    const step1Len = step1.length;
    const arr = [];
    const container = [];

    for(let count=0; count<step1Len; count++){
        arr.push(step1[count].split(""))
    }

    for(let repeat=0; repeat<arr.length; repeat++){
        arr[repeat][0] = arr[repeat][0].toUpperCase();

        container.push(arr[repeat].join(""));
    }

    console.log(container.join(" "));
}

capitalize('i am learning javascript');