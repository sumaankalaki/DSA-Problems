


//Brute force method

const rotateArray = function(array, k){
    const length = array.length;
    k=k%length;

    const temp = array.slice(length-k);
    for(let i=length-k-1; i>=0 ; i--){
        array[i+k] = array[i];
    }
    for( let i=0; i<k; i++){
        array[i]= temp[i];
    }
    return array;
}

array = [1,2,3,4,5];
console.log(array,6);


const rotateArrayByReverse = (arr, k) => {
  k = k % arr.length;

  const reverse = (a, l, r) => {
    while (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      l++;
      r--;
    }
  };

  reverse(arr, 0, arr.length - 1); // full reverse
  reverse(arr, 0, k - 1);          // first k  reverse
  reverse(arr, k, arr.length - 1); // remaining

  return arr;
};

let array = [1,2,3,4,5];
console.log(rotateArrayByReverse(array, 6)); // [5,1,2,3,4]