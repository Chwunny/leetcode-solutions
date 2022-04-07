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
  }, // 72ms, 45.1MB
  secondTry: function isValid(s: string): boolean {
    const stack: string[] = [];
    const map = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (let i = 0; i < s.length; i++) {
      if (stack.length && stack.at(-1) === map[s[i]]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
    return stack.length === 0;
  }, // 72ms, 43.8 MB
};
