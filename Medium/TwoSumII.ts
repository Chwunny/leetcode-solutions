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
};
