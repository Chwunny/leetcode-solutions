export const Solution = {
  firstTry: function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i] - 1)) {
        let length = 0;
        while (set.has(nums[i] + length)) {
          length += 1;
        }
        longest = Math.max(longest, length);
      }
    }
    return longest;
  }, // 440ms, 51.4MB
};
