solution = function (arr) {
    if (!arr) {
        return false;
    }
    let sum, average = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
            average = sum / arr.length;
        }
    }
    return average % 1 === 0 && average !== 0;
};

console.log(solution(null));
