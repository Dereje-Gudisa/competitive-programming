/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let minVal = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const newVal = digitSum(nums[i]);
        if (newVal < minVal) {
            minVal = newVal;
        }
    }

    return minVal;
    
};