/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodes = new Map(); // value -> TreeNode
    const children = new Set(); // values that appear as children

    for (const [parentVal, childVal, isLeft] of descriptions) {
        if (!nodes.has(parentVal)) {
            nodes.set(parentVal, new TreeNode(parentVal));
        }
        if (!nodes.has(childVal)) {
            nodes.set(childVal, new TreeNode(childVal));
        }

        const parent = nodes.get(parentVal);
        const child = nodes.get(childVal);

        if (isLeft === 1) {
            parent.left = child;
        } else {
            parent.right = child;
        }

        children.add(childVal);
    }

    for (const [val, node] of nodes) {
        if (!children.has(val)) {
            return node;
        }
    }

    return null;
    
};