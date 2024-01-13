const gameSuKien = new Map([
    [5, '⚽ Goal'],
    [12, '🔁 Substitution'],
    [28, '🟨 Yellow Card'],
    [32, '⚽ Goal'],
    [45, '🔄 Half-Time'],
    [47, '🔁 Substitution'],
    [60, '🟨 Yellow Card'],
    [64, '🟨 Yellow Card'], 
    [75, '🔁 Substitution'],
    [89, '⚽ Goal'],
    [90, '🔴 Red Card'],
    [94, '🔄 Full-Time']
]);

// 1.
const suKien = [...new Set(gameSuKien.values())]
console.log(suKien)

// 2.
gameSuKien.delete(64)

//3.
const matchTime = [...gameSuKien.keys()].pop();
console.log(matchTime)
console.log(`Một sự kiện xảy ra trung bình mỗi ${Math.round(matchTime / gameSuKien.size)} phut`)
// const averageEvents = matchTime / 90 * 9;
// console.log(`Một sự kiện xảy ra trung bình mỗi ${averageEvents} phut`)

// 4.
for (const [min, event] of gameSuKien){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} half] ${min} : ${event}`)
}


