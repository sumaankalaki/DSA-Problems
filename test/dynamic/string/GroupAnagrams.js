const GroupAnagrams = function(strings){
    const sorted = strings.map(x=>x.split('').sort().join(''));
    const ht = {};
    //hashtable key->sorted  value->strings
    for( let i=0; i<strings.length;i++){
        if(!ht[sorted[i]]){
            ht[sorted[i]]=[strings[i]];
        }
        else{
            ht[sorted[i]].push(strings[i]);
        }
    }

    return Object.values(ht);
}

var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    console.log(words);
    let lastword = words[words.length-1];
    return lastword.length;
};

console.log("lengthOfLastWord", lengthOfLastWord("agjhfy kjrfu hello"));

let str = [ "abc", "acb", "bca", "cat", "tca", "tac", "vacv"];
console.log(str);
let answer=GroupAnagrams(str);
console.log(answer);