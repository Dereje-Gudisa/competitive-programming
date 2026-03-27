/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    
    // Create a copy of the original matrix for comparison
    const original = mat.map(row => [...row]);
    
    // Perform k shifts on each row
    for (let step = 0; step < k; step++) {
        for (let i = 0; i < m; i++) {
            const row = mat[i];
            
            if (i % 2 === 0) {
                // Even row: shift left
                const first = row[0];
                for (let j = 0; j < n - 1; j++) {
                    row[j] = row[j + 1];
                }
                row[n - 1] = first;
            } else {
                // Odd row: shift right
                const last = row[n - 1];
                for (let j = n - 1; j > 0; j--) {
                    row[j] = row[j - 1];
                }
                row[0] = last;
            }
        }
    }
    
    // Compare with original matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== original[i][j]) {
                return false;
            }
        }
    }
    
    return true;
    
};