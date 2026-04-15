/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const n = words.length;
    let minDistance = Infinity;
    
    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            // Calculate clockwise distance
            const clockwise = (i - startIndex + n) % n;
            // Calculate counter-clockwise distance
            const counterClockwise = (startIndex - i + n) % n;
            // Take the minimum of the two directions
            const distance = Math.min(clockwise, counterClockwise);
            minDistance = Math.min(minDistance, distance);
        }
    }
    
    return minDistance === Infinity ? -1 : minDistance;
    
};