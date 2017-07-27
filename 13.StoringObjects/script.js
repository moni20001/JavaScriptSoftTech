
function solve(text) {
    for(let i=0;i<text.length;i++){
        let tempArr = text[i].split(" -> ");
        let name = tempArr[0];
        let age = tempArr[1];
        let grade = tempArr[2];
        let person = {
            name: name,
            age:age,
            grade:grade
        };
        console.log("Name: " + person.name);
        console.log("Age: " + person.age);
        console.log("Grade: " + person.grade);
    }
}