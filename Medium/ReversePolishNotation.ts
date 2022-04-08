export const Solution = {
  firstTry: function evalRPN(tokens: string[]): number {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
      switch (tokens[i]) {
        case "+":
          stack.push(stack.pop() + stack.pop());
          break;
        case "-":
          const a = stack.pop();
          const b = stack.pop();
          stack.push(b - a);
          break;
        case "*":
          stack.push(stack.pop() * stack.pop());
          break;
        case "/":
          const c = stack.pop();
          const d = stack.pop();
          stack.push(Math.trunc(d / c));
          break;
        default:
          stack.push(Number(tokens[i]));
      }
    }
    return stack[0];
  }, // 103ms, 45.5MB
  secondTry: function evalRPN(tokens: string[]): number {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token === "+") {
        stack.push(stack.pop() + stack.pop());
      } else if (token === "-") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b - a);
      } else if (token === "*") {
        stack.push(stack.pop() * stack.pop());
      } else if (token === "/") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(Math.trunc(b / a));
      } else stack.push(Number(token));
    }
    return stack[0];
  }, // 101ms, 45.7MB
};
