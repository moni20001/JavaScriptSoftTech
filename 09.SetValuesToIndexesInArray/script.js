function solve(text) {
    let array = [];
    for(let i =0;i<Number(text[0]);i++){
        array[i] = 0;
    }
    for(let i=1;i<text.length;i++){
        let tempArr = text[i].split(' - ');
        let index = tempArr[0];
        let num;
        num = tempArr[1];
        array[index]= num;
    }
    for(let i =0; i<Number(text[0]);i++){
        console.log(array[i]);
    }
}
solve((['3', '0 - 5', '1 - 6', '2 - 7']));