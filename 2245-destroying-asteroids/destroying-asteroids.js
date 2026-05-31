/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);

    for (const ast of asteroids) {
        if (mass < ast) {
            return false;
        }
        mass += ast;
    }

    return true;
    
};