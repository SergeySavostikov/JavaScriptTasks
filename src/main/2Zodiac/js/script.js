solution = function (dateStr) {

    const day = parseInt(dateStr.split("/")[0]);
    const month = parseInt(dateStr.split("/")[1]);

    switch (month) {
        case 1:
            if (day <= 19) {
                return "Козерог";
            } else {
                return "Водолей";
            }

        case 2:
            if (day <= 18) {
                return "Водолей";
            } else {
                return "Рыбы";
            }

        case 3:
            if (day <= 20) {
                return "Рыбы";
            } else {
                return "Овен";
            }

        case 4:
            if (day <= 19) {
                return "Овен";
            } else {
                return "Телец";
            }

        case 5:
            if (day <= 20) {
                return "Телец";
            } else {
                return "Близнецы";
            }

        case 6:
            if (day <= 21) {
                return "Близнецы";
            } else {
                return "Рак";
            }

        case 7:
            if (day <= 22) {
                return "Рак";
            } else {
                return "Лев";
            }

        case 8:
            if (day <= 22) {
                return "Лев";
            } else {
                return "Дева";
            }

        case 9:
            if (day <= 22) {
                return "Дева";
            } else {
                return "Весы";
            }

        case 10:
            if (day <= 22) {
                return "Весы";
            } else {
                return "Скорпион";
            }

        case 11:
            if (day <= 22) {
                return "Скорпион";
            } else {
                return "Стрелец";
            }

        case 12:
            if (day <= 21) {
                return "Стрелец";
            } else {
                return "Козерог";
            }

    }
};
