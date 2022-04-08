export const Solution = {
  firstTry: class MinStack {
    stack: any = [];
    minStack: any = [];

    constructor() {}

    push(val: number): void {
      this.stack.push(val);
      val = Math.min(val, this.minStack.length ? this.minStack.at(-1) : val);
      this.minStack.push(val);
    }

    pop(): void {
      this.stack.pop();
      this.minStack.pop();
    }

    top(): number {
      return this.stack.at(-1);
    }

    getMin(): number {
      return this.minStack.at(-1);
    }
  }, // 139ms,51.8MB
};
