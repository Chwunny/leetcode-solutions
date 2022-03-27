export const solution = {
  isValid: (s: string): boolean => {
    const hashMap = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    let stack: string[];

    [...s].forEach((c: string, i) => {
      if (stack.length && stack.at(-1) === hashMap[c]) {
        stack.pop();
      } else {
        stack.push(c);
      }
    });
    return stack.length === 0; // true or false
  },
};
