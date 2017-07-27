function solve(text) {
    let arrFinal = [];
    let special = text[text.length-1];
    for (let i = 0; i < text.length - 1; i++) {
        let smArr = text[i].split(' ');
        let key = smArr[0];
        let value = smArr[1];
        if(key===special){
            arrFinal.push(value);
        }
    }
    if(arrFinal.length>1){
        for(let i =0;i<arrFinal.length;i++){
            console.log(arrFinal[i]);
        }
    }
    else{
        console.log("None");
    }
}
