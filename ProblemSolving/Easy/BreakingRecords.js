function breakingRecords(scores) {
    // Write your code here
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 0; i < scores.length; i++){
        if(scores[i] < minScore){
            minCount++;
            minScore = scores[i];
        }
        if(scores[i] > maxScore){
            maxCount++;
            maxScore = scores[i];
        }


    }

    return [maxCount, minCount]

}