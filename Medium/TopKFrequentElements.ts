// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

export const Solution = {
  firstTry: function topKFrequent(nums: number[], k: number): number[] {
    const map: any = {};
    for (let i = 0; i < nums.length; i++) {
      if (map.hasOwnProperty(nums[i])) {
        map[nums[i]] += 1;
      } else {
        map[nums[i]] = 1;
      }
    }
    const sortable: any = [];
    Object.keys(map).forEach((num) => {
      sortable.push([num, map[num]]);
    });
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });
    const res: any = [];
    for (let i = 0; i < k; i++) {
      const tmp = parseInt(sortable[i][0]);
      res.push(tmp);
    }
    return res;
  }, // 137ms, 45.6MB
};
