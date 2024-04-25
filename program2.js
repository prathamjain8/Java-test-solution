function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  // Step 1: Replace negative numbers and numbers greater than n with 0
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 0;
    }
  }

  // Step 2: Use the array itself as a hashmap
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (index < n && nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // Step 3: Find the smallest missing positive integer
  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      return i + 1;
    }
  }

  return n + 1; // If all positive integers up to n are present
}

module.exports = smallestMissingPositiveInteger;

// Example usage:
// console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
// console.log(smallestMissingPositiveInteger([1, 2, 0])); // Output: 3
// console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
