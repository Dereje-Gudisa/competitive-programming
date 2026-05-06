/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;

    for (let i = 0; i < m; i++) {
        let writePos = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (boxGrid[i][j] === '*') {
                writePos = j - 1;
            } else if (boxGrid[i][j] === '#') {
                [boxGrid[i][j], boxGrid[i][writePos]] = [boxGrid[i][writePos], boxGrid[i][j]];
                writePos--;
            }
        }
    }

    const rotated = Array(n).fill().map(() => Array(m));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][m - 1 - i] = boxGrid[i][j];
        }
    }

    return rotated;
    
};