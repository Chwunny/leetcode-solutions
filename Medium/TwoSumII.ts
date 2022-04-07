export const Solution = {
  fisrtTry: function twoSum(numbers: number[], target: number): number[] {
    const map: any = {};
    for (let i = 0; i < numbers.length; i++) {
      const diff = target - numbers[i];
      if (map.hasOwnProperty(diff)) {
        return [map[diff], i + 1];
      }
      map[numbers[i]] = i + 1;
    }
  }, // 68ms, 44.3MB - This doesnt actually meet the constraints of the problem though, pointers must be used
  secondTry: function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
      const curSum = numbers[l] + numbers[r];
      if (curSum > target) {
        r--;
      } else if (curSum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }
  }, // 84ms, 43.9MB
};
