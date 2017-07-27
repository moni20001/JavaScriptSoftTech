function solve(text) {
    let obj = {};
    for (let i = 0; i < text.length; i++) {
        let temp = text[i].split(" -> ");
        if(isNaN(temp[1])){
            obj[temp[0]]=temp[1];
        }
        else{
            obj[temp[0]]=Number(temp[1]);
        }

    }
    let str = JSON.stringify(obj);
    console.log(str);
}