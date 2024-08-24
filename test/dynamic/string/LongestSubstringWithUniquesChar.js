const maxLength = function(str){
    let hashtable = {};
    let max=0;
    let start=0;
    for(let i=0; i<str.length;i++){
        let char= str[i];
        if(char in hashtable){
            start= Math.max(start,hashtable[char]+1);
            hashtable[char] = i;
        }
        max= Math.max(max, i-start+1);
        hashtable[char] = i;
    }
    return max;
}

console.log(maxLength("abab"));