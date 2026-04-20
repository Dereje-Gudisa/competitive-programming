/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length;
    let maxDist = 0;
    
    // Check from leftmost house to rightmost house
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[0]) {
            maxDist = Math.max(maxDist, i - 0);
        }
        if (colors[i] !== colors[n - 1]) {
            maxDist = Math.max(maxDist, (n - 1) - i);
        }
    }
    
    return maxDist;
    
};