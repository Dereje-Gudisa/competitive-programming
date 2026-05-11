/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = [];
    
    for (const num of nums) {
        const digits = num.toString().split('');
        for (const digit of digits) {
            result.push(parseInt(digit));
        }
    }
    
    return result;
};