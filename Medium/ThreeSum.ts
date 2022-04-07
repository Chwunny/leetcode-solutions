// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

export const Solution = {
  firstTry: function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        let threeSum = nums[i] + nums[l] + nums[r];
        if (threeSum > 0) {
          r--;
        } else if (threeSum < 0) {
          l++;
        } else {
          res.push([nums[i], nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
      }
    }
    return res;
  }, // 124ms, 53.7MB
};

// this problem is almost identical to Two Sum II, however, we must sort the array ourselves first and then find two numbers in nums[] that sum to zero along with nums[i].
// We can do this by starting at i = 0 and then incrememnting by one after every standard TwoSum for loop, however, once again we must consider that it is almost guaranteed that there will be duplicate numbers right? To combat this we can implement a while loop that checks to see if nums[i] === nums[i - 1]. If this is the case then we simply increment i and check again, continuing on forever until we find a new number.

// Once the loop is complete we return res: number[][]
