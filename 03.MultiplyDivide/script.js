function solve(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    if(num2>=num1){
        console.log(num1 * num2);
    }
    else{
        console.log(num1 / num2);
    }
}

