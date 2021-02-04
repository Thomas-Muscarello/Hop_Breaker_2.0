level1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,0]
];

function buildLevel(game,level){
    let grains = [];

    level.forEach((row, rIndex) => {
        row.forEach((grain, gIndex) => {
            if(grain === 1){
                let position = {
                    x: 65 * gIndex,
                    y: 50 + 24 * rIndex
                };
               grains.push(new Grain(game,position)); 
            }
        });
    });
    return grains;
}
