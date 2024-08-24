var isPalindromeBrute = function(s) {
    let newStringTocompare = [];
    for(let i =s.length-1; i>=0; i--){
        newStringTocompare.push(s[i]);
    }

    if(newStringTocompare.join('') === s){
        return "YES"
    }else{
        return "NO";
    }

}

var isPalindromebetter = function(s) {
    let newStringTocompare = '';
    for(let i =s.length-1; i>=0; i--){
        newStringTocompare += s[i];
    }

    if(newStringTocompare === s){
        return "true";
    }
    else{
        return "false";
    }

}
var isPalindromeTwoPointer = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return "Not_Palindrome";
        }
        left++;
        right--;
    }

    return "YES_Palindrome";
}

let s = "malayalam";
console.log(isPalindromeBrute(s));
console.log(isPalindromebetter(s));
console.log(isPalindromeTwoPointer(s));