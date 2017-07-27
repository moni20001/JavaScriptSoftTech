function solve(text) {
    for(let i= 0;i<text.length;i++){
        let obj = JSON.parse(text[i]);
        console.log("Name: " + obj.name);
        console.log("Age: " + obj.age);
        console.log("Date: " + obj.date);
    }
}