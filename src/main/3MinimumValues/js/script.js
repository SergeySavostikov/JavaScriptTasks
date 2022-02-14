/**
 *
 * @param strArr : []
 * @returns {number}
 */
solution = (strArr) => {
    let result = 0;

    strArr.forEach(elemArray => {
        result += elemArray.split(" ").map(elem => {
            return parseInt(elem);
        }).sort()[0];
    });
    return result;
};
