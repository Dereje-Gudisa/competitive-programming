/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const trie = {};

    // Insert all prefixes of each number in arr1 into trie
    for (let num of arr1) {
        let str = num.toString();
        let node = trie;
        for (let ch of str) {
            if (!node[ch]) node[ch] = {};
            node = node[ch];
        }
    }

    let maxLen = 0;

    // For each number in arr2, check longest matching prefix
    for (let num of arr2) {
        let str = num.toString();
        let node = trie;
        let len = 0;
        for (let ch of str) {
            if (node[ch]) {
                len++;
                node = node[ch];
            } else {
                break;
            }
        }
        maxLen = Math.max(maxLen, len);
    }

    return maxLen;
    
};