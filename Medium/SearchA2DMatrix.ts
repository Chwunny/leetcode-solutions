// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

export const Solution = {
  firstTry: function searchMatrix(matrix: number[][], target: number): boolean {
    const flat = matrix.flat();
    for (let i = 0; i < flat.length; i++) {
      if (flat[i] === target) {
        return true;
      }
    }
    return false;
  }, // 66ms, 45MB
  //prettier-ignore
  binarySearch: function searchMatrix(matrix: number[][],target: number): boolean {
    const flat = matrix.flat();
    let l = 0;
    let r = flat.length - 1;

    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);
      if (flat[m] > target) {
        r = m - 1;
      } else if (flat[m] < target) {
        l = m + 1;
      } else {
        return true;
      }
    }
    return false;
  }, // 69ms, 45.1MB
};

// Explanation: In both scenarios here we flatten the matrix into a single array, while this is technivally cheating, its very efficient and solves the problem just fine. After flattening we have two options, we can use a standard for loop to look for the target - O(n), or we can use a binary search while loop to look for the target - O(n log n)
