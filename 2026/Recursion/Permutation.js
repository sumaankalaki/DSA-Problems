var permuteUniques = function(nums) {
    var res = [];

    var permutations = function(index) {
        // base case
        if (index === nums.length - 1) {
            res.push([...nums]);
            return;
        }

        var hash = {};

        for (var j = index; j < nums.length; j++) {
            if (!hash[nums[j]]) {
                hash[nums[j]] = true;

                // swap
                [nums[index], nums[j]] = [nums[j], nums[index]];

                permutations(index + 1);

                // backtrack
                [nums[index], nums[j]] = [nums[j], nums[index]];
            }
        }
    };

    permutations(0);
    return res;
};

console.log(permuteUniques([1, 2, 1]));