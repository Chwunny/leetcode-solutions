// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

/* Link to image: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg */

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

export const Solution = {
  firstTry: function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let res = 0;

    while (l < r) {
      res = Math.max(res, Math.min(height[l], height[r]) * (r - l));
      if (height[l] < height[r]) {
        l++;
      } else if (height[r] <= height[l]) {
        r--;
      }
    }
    return res;
  }, // 113ms, 51.6MB
};

// Base test: height = [1,8,6,2,5,4,8,3,7]
// lets start with height[0] and height[ height.length - 1 ] (8)
// on our first loop we calculate the min of height[0] and height[8] => ( 1 < 7 ) => we get 1. we then calculate the max of res and said min (1) * (r - 1) (7) => 0 < (7 * 1)(7) => we get 7. This is our new maxArea.
// we then check to see if height[0] is less than height[8]. If so we increment pointer:l by 1: 0 => 1
// if for some reason height[l] > height[r] we check to see if height[r] is less than or equal to height[l], in which case we decrement pointer:r by 1: 8 => 7.

// In this example height[8] is our max right side value, so we never decrement it. On our second loop we see calculate our maxArea. min(height[1], 7) * r (8) - 1 => 7 * 7 => 49. 49 is greater than our previous maxArea(7), so it is updated. This behavior continues until we check every possible area in the array. Our maxArea only ever gets updated if we find a greater area, so in this case we loop the rest of the array and never update maxArea again, it stays as 49 and that is our answer.
