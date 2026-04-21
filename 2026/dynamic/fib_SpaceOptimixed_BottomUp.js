var SpaceOptimizedBottomUpFibonacci = function (num){
    let prev =0;
    let nextPrev;
    if (num > 0) {
        nextPrev = 1;
    }
    let count =1;
    let current;
    while(num>count){
        count++;
        current = prev + nextPrev;
        prev = nextPrev;
        nextPrev = current;

    }
    return current;
}

console.log(SpaceOptimizedBottomUpFibonacci(6));
// 0,1,1,2,3,5,8

 //prev next cur;