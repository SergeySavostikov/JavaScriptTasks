solution = function (arr) {
    let diagStep = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const secondArr = arr[i];
        for (let j = 0; j < arr[i].length; j++) {
            if (j !== diagStep) {
                result += parseInt(secondArr[j])    }
        }
        diagStep++;
    }
    return result;
};

console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));
