const divide = (arr, n) => {
  const result = []; // Create an empty array to store the resulting subarrays
  let currentSum = 0; // Initialize a variable to keep track of the sum of the current chunk
  let currentChunk = []; // Create an empty array to store elements of the current subarray

  for (const num of arr) { // Iterate through each number in the input array
    if (currentSum + num <= n) { // If adding the current number to the current sum doesn't exceed the maximum sum n
      currentChunk.push(num); // Add the current number to the current chunk
      currentSum += num; // Update the current sum by adding the current number
    } else { // If adding the current number would exceed the maximum sum
      result.push(currentChunk); // Add the current chunk to the result array
      currentChunk = [num]; // Start a new chunk with the current number
      currentSum = num; // Reset the current sum to the current number
    }
  }

  if (currentChunk.length > 0) { // If the last chunk is not empty
    result.push(currentChunk); // Add the last chunk to the result array
  }

  return result; // Return the array of subarrays
};
