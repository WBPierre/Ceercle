const Moment = require("moment");
const { add } = require("nodemon/lib/rules");
exports.dateFormater = function (date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yyyy: date.getFullYear(),
        hh: date.getHours(),
        MM: date.getMinutes(),
        ss: date.getSeconds()
    }

    return format.replace(/mm|dd|yyyy|hh|MM|ss/gi, matched => map[matched])
}

exports.getDurationInMilliseconds = function (start) {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}


exports.getCurrentWeek = function (index) {
    const now = Moment().tz('Europe/Paris');
    if (now.day() === 0) {
        now.add(1, 'days');
    } else if (now.day() === 6) {
        now.add(2, 'days');
    }
    let weekStart = now.clone().startOf('isoWeek');
    let weekEnd = now.clone().endOf('isoWeek');

    const currentDay = Moment().tz('Europe/Paris').format("YYYY-MM-DD");

    let days = [];

    for (let i = 0; i <= 4; i++) {
        const day = Moment(weekStart).add(i + (7 * index), 'days').format("YYYY-MM-DD")
        let obj = {
            day: day,
            morning: 0,
            afternoon: 0,
            current: currentDay === day ? true : false,
            reservation: [],
            past: currentDay > Moment(weekStart).add(i + (7 * index), 'days').format("YYYY-MM-DD")
        }
        days.push(obj)
    }
    return days
}

exports.getCurrentMonth = function (index) {
    const now = Moment().tz('Europe/Paris');
    if (now.day() === 0) {
        now.add(1, 'days');
    } else if (now.day() === 6) {
        now.add(2, 'days');
    }
    now.add(7 * index, 'days')
    let monthStart = now.clone().startOf('month').format("YYYY-MM-DD");
    let monthEnd = now.clone().endOf('month').format("YYYY-MM-DD");
    return [monthStart, monthEnd]
}

exports.getUsersWeekTimeSheets = function (index) {
    const now = Moment().tz('Europe/Paris');
    if (now.day() === 0) {
        now.add(1, 'days');
    } else if (now.day() === 6) {
        now.add(2, 'days');
    }
    let weekStart = now.clone().startOf('isoWeek');
    let weekEnd = now.clone().endOf('isoWeek');


    const currentDay = Moment().tz('Europe/Paris').format("YYYY-MM-DD");

    let days = [];
    for (let i = 0; i <= 4; i++) {
        const day = Moment(weekStart).add(i + (7 * index), 'days').format("YYYY-MM-DD")
        let obj = {
            day: day,
            type: {
                0: [],
                1: [],
                2: [],
                3: [],
                4: []
            }
        }
        days.push(obj)
    }
    return days
}



exports.generateTree = function (list) {
    let map = {}, node, roots = [], i;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parentId !== null) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].elements.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

exports.calculateTreeSum = function (tree) {
    if (tree.elements.length !== 0) {
        tree.elements.forEach(child => {
            tree.used += this.calculateTreeSum(child);
        });
    }
    return tree.used;
}

exports.extractLeafFromTree = function (tree) {
    if (tree.elements.length == 0) {
        return [tree]
    } else {
        let leaves_list = []
        for (let i = 0; i < tree.elements.length; i++) {
            leaves_list = leaves_list.concat(exports.extractLeafFromTree(tree.elements[i]))
        }
        return (leaves_list)
    }
}

exports.checkIfWeekCompliantToHRRules = function (companyMandatoryStatuses, userStatusesByDayForWeek) {
    for (let i = 0; i < 5; i++) {
        if (companyMandatoryStatuses[i] == 1) {
            return !(userStatusesByDayForWeek[i][0] == 2 || userStatusesByDayForWeek[i][1] == 2)
        }
        if (companyMandatoryStatuses[i] == 2) {
            return !(userStatusesByDayForWeek[i][0] == 1 || userStatusesByDayForWeek[i][1] == 1)
        }
    }
    return true
}

exports.selectBusinessDays = function (startDate, endDate) {
    const Sunday = 0;
    const Saturday = 6;
    let business_days_list = []
    let business_days_count = [0, 0, 0, 0, 0];
    let nb_business_days = 0

    const newDate = Moment(startDate, "YYYY-MM-DD")
    const endDateFormatted = Moment(endDate, "YYYY-MM-DD")

    while ((Moment.duration(endDateFormatted.diff(newDate)).asDays() >= 0)) {
        if (newDate.day() !== Sunday && newDate.day() !== Saturday) {
            business_days_list.push(newDate.format("YYYY-MM-DD"))
            business_days_count[newDate.day() - 1] += 1
            nb_business_days += 1
        }
        newDate.add(1, 'days');
    }
    return { business_days_list, business_days_count, nb_business_days }
}

exports.formatRatioList = function (list) {
    let cpt = 0
    for (let i = 0; i < list.length; i++) {
        cpt += list[i]
    }
    let result = []
    for (let i = 0; i < list.length; i++) {
        result.push(Math.round(list[i] / cpt * 100) / 100)
    }
    return result
}

exports.formatRatioMatrixByColumn = function (matrix) {
    let cpt = Array.from({ length: matrix.length }, (_, i) => 0)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            cpt[j] += matrix[i][j]
        }
    }

    let results = []
    for (let i = 0; i < matrix.length; i++) {
        let result = []
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(Math.round(matrix[i][j] / cpt[j] * 100) / 100)
        }
        results.push(result)
    }

    return results
}

exports.formatRatioStackedMatrixByColumn = function (matrix) {
    let cpt = Array.from({ length: matrix[0].length }, (_, i) => 0)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            cpt[j] += matrix[i][j]
        }
    }

    let results = []
    for (let i = 0; i < matrix.length - 1; i++) {
        let result = []
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(Math.round(matrix[i][j] / cpt[j] * 100) / 100)
            if (i !== 0) {
                result[j] += results[i - 1][j]
            }
        }
        results.push(result)
    }
    results.push(Array.from({ length: matrix[0].length }, (_, i) => 1))

    return results
}