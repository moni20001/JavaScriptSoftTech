function solve(nums){
    let minus = 0;
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);
    if(num1 ===0 || num2===0 || num3===0){
        console.log("Positive");
    }
    else{
        if(num1 <0){
        minus++;
        }
        if(num2 <0){
            minus++;
        }
        if(num3 <0){
            minus++;
        }

        if(minus===1 || minus === 3){
            console.log("Negative");
        }
        else{
            console.log("Positive");
        }
}}