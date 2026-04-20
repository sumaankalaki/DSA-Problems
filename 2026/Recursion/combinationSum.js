var combination = function(n,k){
    let res = [];
    function helper(start, curr){
        //base case
        if(curr.length === k){
            res.push([...curr]);
            return;
        }

        //recursive
        for(let j= start ; j<= n; j++){
            curr.push(j);
            helper(j+1, curr);
            curr.pop();
        }

    }
    helper(1, []);
    return res;
}

console.log(combination(5,2));
// 1,2,3,4,5 give combo of 2 disticnt