function birthdayCakeCandles(candles) {
    
    const tallest = Math.max(...candles)
    
    return candles.filter((c) => c === tallest).length
}