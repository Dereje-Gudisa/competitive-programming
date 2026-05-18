/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const n = arr.length;
    if (n === 1) return 0;

    // Build value -> indices mapping
    const valueToIndices = new Map();
    for (let i = 0; i < n; i++) {
        if (!valueToIndices.has(arr[i])) valueToIndices.set(arr[i], []);
        valueToIndices.get(arr[i]).push(i);
    }

    const visited = new Array(n).fill(false);
    const queue = [[0, 0]]; // [index, steps]
    visited[0] = true;

    while (queue.length > 0) {
        const [idx, steps] = queue.shift();

        if (idx === n - 1) return steps;

        // Jump i+1
        if (idx + 1 < n && !visited[idx + 1]) {
            visited[idx + 1] = true;
            queue.push([idx + 1, steps + 1]);
        }

        // Jump i-1
        if (idx - 1 >= 0 && !visited[idx - 1]) {
            visited[idx - 1] = true;
            queue.push([idx - 1, steps + 1]);
        }

        // Jump to same-valued indices
        const val = arr[idx];
        if (valueToIndices.has(val)) {
            for (const nextIdx of valueToIndices.get(val)) {
                if (!visited[nextIdx] && nextIdx !== idx) {
                    visited[nextIdx] = true;
                    queue.push([nextIdx, steps + 1]);
                }
            }
            valueToIndices.delete(val); // avoid reprocessing
        }
    }

    return -1;
    
};