//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let l=0; r=height.length-1;
    let res= 0;

    while(l<r)
    {
        let area = (r-l) * Math.min(height[r], height[l]);
        res = Math.max(res, area);

        if( height[l]< height[r])
            l+= 1
        else
            r -= 1;
    }
    return res;
    
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));