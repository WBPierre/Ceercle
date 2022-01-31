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
    let monthStart = now.clone().startOf('isoMonth');
    let monthEnd = now.clone().endOf('isoMonth');
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