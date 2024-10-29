var productExceptSelf = function(nums) {
    let n = nums.length;
    const prefix = new Array(n).fill(1);
    const postfix = new Array(n).fill(1);

    for(let i=1; i<n; i++){
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    for(let i=n-2; i>=0; i--){
        postfix[i]=postfix[i+1]*nums[i+1];
    }
    const output = [];
    for(let i=0; i<n; i++){
        output[i] = postfix[i]*prefix[i];
    }
    return output;
};