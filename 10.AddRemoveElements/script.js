
function solve(arr) {
    let array = [];
    for(let i =0;i<arr.length;i++){
        let smArr = arr[i].split(' ');
        let command = smArr[0];
        let num = Number(smArr[1]);
        if(command ==="add"){
            array.push(num)
        }
        if(command==="remove"){
            array.splice(num,1);
        }

    }
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}