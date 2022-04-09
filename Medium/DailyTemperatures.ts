//
export const Solution = {
  firstTry: function dailyTemperatures(temperatures: number[]): number[] {
    const answer: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
      const curr = temperatures[i];
      let daysWaited = 0;
      for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[j] > curr) {
          answer.push(daysWaited + 1);
          daysWaited = 0;
          break;
        } else if (j < temperatures.length - 1) {
          daysWaited++;
        } else {
          answer.push(0);
          break;
        }
      }
    }
    answer.push(0);
    return answer;
  }, // 2846ms, 66MB, O(n^2), yikes...
  secondTry: function dailyTemperatures(temperatures: number[]): number[] {
    const res = temperatures.slice().map(() => 0);
    const stack: any = [];

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && temperatures[i] > stack.at(-1)[0]) {
        const prev = stack.pop();
        const stackInd = prev[1];
        res[stackInd] = i - stackInd;
      }
      stack.push([temperatures[i], i]);
    }
    return res;
  }, // 468ms, 73.9MB
};
