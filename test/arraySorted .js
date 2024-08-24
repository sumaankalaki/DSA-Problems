
function findIndicesSumGiven(arr, target) {
    const hashTable = {};
    
    for (let i = 0; i < arr.length; i++) {
        let neededValue = target - arr[i];
        
        if (neededValue in hashTable) {
            return [hashTable[neededValue], i];
        } else {
            hashTable[arr[i]] = i;
        }
    }
    
    return [];
}


const arrary = [1,-2,3,-4,6,8, 2,];
let val =findIndicesSumGiven(arrary, 8 );
console.log(val);