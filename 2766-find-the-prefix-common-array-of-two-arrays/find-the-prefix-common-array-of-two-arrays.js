/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const seenA = new Set();
    const seenB = new Set();
    const C = [];

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);

        let common = 0;
        for (let num of seenA) {
            if (seenB.has(num)) common++;
        }
        C.push(common);
    }

    return C;
    
};