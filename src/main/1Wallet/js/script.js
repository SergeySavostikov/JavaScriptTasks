solution = function (pocketStr) {
    const pocket = pocketStr.match(/\d+/g);
    let bun = parseInt(pocket[0]) + parseInt(pocket[2]);
    let kop = parseInt(pocket[1]) + parseInt(pocket[3]);
    let rub = kop % 100;
    if (rub >= 0){
        bun += 1;
        kop -= 100;
    }
    return `${bun}бун ${kop}коп`;
};

console.log(solution("5бун 99коп + 4бун 99коп"));
