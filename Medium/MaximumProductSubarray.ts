export const Solution = {
  maxProduct: (nums: number[]): number => {
    let res = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;

    nums.forEach((num) => {
      if (num === 0) {
        curMin = 1;
        curMax = 1;
        return;
      }
      const tmp = curMax * num;
      curMax = Math.max(curMax * num, curMin * num, num);
      curMin = Math.min(tmp, curMin * num, num);
      res = Math.max(res, curMax);
    });

    return res;
  },
};
