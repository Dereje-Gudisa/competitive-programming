/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    
    for (let char of s) {
        if (map.has(char)) {
            // Closing bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== map.get(char)) {
                return false;
            }
        } else {
            // Opening bracket
            stack.push(char);
        }
    }
    
    return stack.length === 0;
    
};