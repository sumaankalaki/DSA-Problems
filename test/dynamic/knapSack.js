/*
Question 1: 01 Knapsack: You are provided with a set of N items,
 each with a specified weight and value. 
 Your objective is to pack these items into a backpack with a weight limit of W,
  maximizing the total value of items in the backpack. Specifically,
   you have two arrays: val[0..N-1], representing the values of the items, and wt[0..N-1], 
   indicating their weights. Additionally, you have a weight limit W for the backpack. 
   The challenge is to determine the most valuable combination of items where the total weight 
   does not exceed W. Note that each item is unique and indivisible,
 meaning it must be either taken as a whole or left entirely.
*/

//Recursive approach 
function knapsack(W, wt, val, n)
{
    function helper(index, remweight)
    {
        //base Case
        if(index>=n || remweight === 0)
        {
            return 0;
        }

        //resursive case
        let exclude = helper(index+1, remweight);
        let include = 0;
        if(wt[index]<=remweight){
            include = val[index] + helper(index+1, remweight-wt[index]);
        }
        return Math.max(exclude, include);
    }

   return helper(0, W);
}

//Memorization/ Top down
