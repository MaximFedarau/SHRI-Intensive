function maximalSubarraySum(arr) {
    const dp = Array(arr.length).fill(0);
    dp[0] = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
    }
    return Math.max(...dp);
}

console.log(maximalSubarraySum([-30,1,2,-2,4,5, -10, -20]))