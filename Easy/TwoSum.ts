const linearSolution = {
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

const quadraticSolution = {
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
