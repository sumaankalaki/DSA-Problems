//https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB

arr = [1,2,5,7,7];
arr.sort();
console.log(arr);
let n = arr.length;
console.log("Lengh: ",n);
let secondLargest = null;
let largeElement =arr[n-1];

//Brute force approach
for(let i=n-2; i>=0; i--)
{
    if(arr[i]!=largeElement)
    {
        secondLargest = arr[i];
        break;
    }
}
console.log(secondLargest);

//Better approach
SecondLarge = -1;
for(let i=0;i<n-1;i++){
    if( arr[i]>SecondLarge && arr[i]!= largeElement)
    {
        SecondLarge =arr[i];
    }
}
console.log(SecondLarge);

// Optimal Approach
arr = [1,2,5,7,7];
let len = arr.length;
function secondLargest(a,n)
{
    let largeElement= a[0];
    let SecondLarge = -1;
    for(let i=1;i<=n;i++)
    {
        if(arr[i]>largeElement)
        {
            SecondLarge=largeElement;
            largeElement=arr[i];

        }else if(a[i]>SecondLarge && a[i]<=largeElement){
            secondLargest=a[i];
        }
    }
    return SecondLarge;
}
console.log("secondLargestElement", secondLargest(arr, len));