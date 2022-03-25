// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

export const solution = {
  getSum: (a: number, b: number): number => {
    // Example 2
    // a = 2, b = 3
    // 0010
    // 0011
    // (a & b) << 1 => 0100
    // a ^ b => 0001
    // loop
    // 0100
    // 0001
    // (a & b) << 1 => 0000 (b is now equal to 0, this will be the final iteration of the loop)
    // a ^ b => 0101 (0101 === 5)
    // return 5
    while (b !== 0) {
      const tmp = (a & b) << 1;
      a = a ^ b;
      b = tmp;
    }
    return a;
  },
};
