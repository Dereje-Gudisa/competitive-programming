/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of roads) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    let minEdge = Infinity;
    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;

    while (queue.length) {
        const u = queue.shift();
        for (const [v, w] of adj[u]) {
            minEdge = Math.min(minEdge, w);
            if (!visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }

    return minEdge;
    
};