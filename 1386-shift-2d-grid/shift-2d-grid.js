/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    k = k % total;

    // Flatten
    const flat = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(grid[i][j]);
        }
    }

    // Right rotate by k
    const shifted = [
        ...flat.slice(total - k),
        ...flat.slice(0, total - k)
    ];

    // Reshape
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push(shifted.slice(i * n, (i + 1) * n));
    }

    return result;
    
};