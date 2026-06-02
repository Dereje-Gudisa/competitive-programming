/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    
    let best = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        const landFinish = landStartTime[i] + landDuration[i];
        for (let j = 0; j < waterStartTime.length; j++) {
            const waterStart = Math.max(waterStartTime[j], landFinish);
            const finish = waterStart + waterDuration[j];
            best = Math.min(best, finish);
        }
    }

    for (let j = 0; j < waterStartTime.length; j++) {
        const waterFinish = waterStartTime[j] + waterDuration[j];
        for (let i = 0; i < landStartTime.length; i++) {
            const landStart = Math.max(landStartTime[i], waterFinish);
            const finish = landStart + landDuration[i];
            best = Math.min(best, finish);
        }
    }

    return best;
};