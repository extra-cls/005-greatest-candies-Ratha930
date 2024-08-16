const greatesCandies = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies);
    const result = candies.map(count => count + extraCandies >= maxCandies);
    // return back the result
    return result;
}
// Example usage:
const candies = [2, 3, 5, 1, 7];
const extraCandies = 3;
console.log(greatesCandies(candies, extraCandies)); // [true, true, true, false, true]
