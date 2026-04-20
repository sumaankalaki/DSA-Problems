function powerSum(array,power=1){
    sum=0;
    array.forEach(element => {
        if( Array.isArray(element)){
            sum += powerSum(element, power+1)
        }else{
            sum+= element
        }
    });
    return Math.pow(sum,power)
}
console.log(powerSum([1, 2, [3, 4], [[2]]])); 
