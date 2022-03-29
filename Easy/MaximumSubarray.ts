export const Solution = {
  maxSubArray: (nums: number[]): number => {
    let maxSum = nums[0];
    let curSum = 0;

    nums.forEach((num) => {
      if (curSum < 0) {
        curSum = 0;
      }
      curSum += num;
      maxSum = Math.max(maxSum, curSum);
    });
    return maxSum;
  },
};
