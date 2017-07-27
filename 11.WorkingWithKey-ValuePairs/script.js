
function solve(text) {
    let dict = [];
    for(let i =0;i<text.length-1;i++){
        let smArr = text[i].split(' ');
        let key = smArr[0];
        let value;
        value = smArr[1];
        dict[key] = value;
    }
        let special=text[text.length-1];
        if(dict[special] === undefined){
            console.log("None");

        }
        else{
            console.log(dict[special]);
        }
}