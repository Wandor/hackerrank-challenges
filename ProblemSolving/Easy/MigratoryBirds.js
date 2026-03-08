function migratoryBirds(arr){
    const count ={};

    for (let bird of arr) {
        count[bird] = (count[bird] || 0) + 1;
    }

    let maxCount = 0;
    let result = null;

    for (let bird in count) {
        if(count[bird] > maxCount || count[bird] === maxCount && bird < result){
            maxCount = count[bird];
            result = bird;
        }
    }

    return result;
}