// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

export const Solution = {
  firstTry: function characterReplacement(s: string, k: number): number {
    const count: any = {}; // start with a hash map
    let res = 0;

    let l = 0; // initialize left pointer
    let maxF = 0; // initialize max frequency of any given letter

    for (let r = 0; r < s.length; r++) {
      // initialize right pointer and start looping
      count[s[r]] = count[s[r]] + 1 || 1; // s[r] === 'A' : 1 => s[r] === 'A' : 2 OR s[r] === 'A' : 1 IF s[r] doesnt exist
      maxF = Math.max(maxF, count[s[r]]); // update max frequency to be the max between maxF and count[s[r]]

      if (r - l + 1 - maxF > k) {
        // first iteration: if (0 - 0 + 1) - 1 > k => decrement count['A'], increment left pointer to look at second letter of string
        count[s[l]] -= 1;
        l++;
      }
      res = Math.max(res, r - l + 1); // first iteration: res => max between current res and 0 - 0 + 1
    }
    return res;
  }, // 94ms, 45MB
};
