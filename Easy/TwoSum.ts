// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

export const linearSolution = {
  // O(n) Hash Map
  twoSum: (nums: number[], target: number): number[] => {
    const prevMap: any = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.hasOwnProperty(nums[i])) {
        return [prevMap[nums[i]], i];
      }

      prevMap[diff] = i;
    }
    return []; // This will never run
  },
};

export const quadraticSolution = {
  // O(n^2)
  twoSum: (nums: number[], target: number): number[] => {
    const answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1 + i; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          answer.push(i, j);
          return answer;
        }
      }
    }
    return []; // This will never run
  },
};
