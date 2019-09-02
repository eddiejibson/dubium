var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getWeekRange = (time = null, justStart = false) => {
    time = (time ? new Date(time) : new Date());
    let origFirst = time.getDate() - time.getDay() + 1;
    let first = new Date(time.setDate(origFirst));
    first.setHours(0, 0, 0, 0);
    let ft = first.getTime();
    let last = new Date(time.setDate(origFirst + 6));
    if (justStart) {
        last.setHours(0, 0, 0, 0);
    } else {
        last.setHours(23, 59, 59, 999);
    }
    let lt = last.getTime();
    return [ft, lt];
}

const daysInRange = (to, from = null, str = false) => {
    if (!from && Array.isArray(to) && to.length > 1) {
        to = to[0];
        from = to[1];
    }
    let range = [];
    let time = new Date(to);
    while (time <= from) {
        let val = new Date(time).getTime();
        if (str) {
            val = String(val);
        }
        range.push(val);
        time.setDate(time.getDate() + 1);
    }
    return range;
}

const unformat = (str = null, format = "DD/MM/YY hh:mm:ss") => {
    var match = /MMM/.exec(format),
        match2 = null,
        day = null,
        hours = null,
        minutes = null,
        seconds = null,
        year = null,
        month = null;

    if (match) {
        match2 = /MMMM/.exec(format);
        for (var i = 0; i < months.length; i++) {
            if (months[i].substr(0, 3).toLowerCase() == str.substr(match.index, 3).toLowerCase()) {
                if (match2) {
                    str = str.replace(months[i], "XXXX")
                } else {
                    str = str.replace(months[i].substr(0, 3), "XXX")
                }
                month = months.indexOf(months[i]);
                break;
            }
        }
    } else {
        match = /MM/.exec(format);
        if (match) {
            month = parseInt(str.substr(match.index, 2));
        }

    }

    match = /hh/.exec(format);
    if (match) {
        hours = parseInt(str.substr(match.index, 2));
    } else {
        match = /H/.exec(format);
        match2 = /[a]+$/i.exec(format);
        if (match) {
            hours = parseInt(str.substr(match.index, 1));
            if (str.substr(match2.index, 2).toLowerCase() == "pm") {

                hours += 12;
            }
            format = format.replace(format.substr(match.index, 1), "XX")
        }
    }

    match = /mm/.exec(format);
    if (match) {
        minutes = parseInt(str.substr(match.index, 2));
    }

    match = /ss/.exec(format);
    if (match) {
        seconds = parseInt(str.substr(match.index, 2));
    }

    match = /DD/.exec(format);
    if (match) {
        day = parseInt(str.substr(match.index, 2));
    }

    match = /YYYY/.exec(format);
    if (match) {
        year = parseInt(str.substr(match.index, 4));
    } else {
        match = /YY/.exec(format);
        if (match) {
            year = 2000 + parseInt(str.substr(match.index, 2));
        }
    }

    return new Date(Date.UTC(year, month, day, hours, minutes, seconds)).getTime();
};

const format = (str = null, time = null) => {
    str = str || "DD/MM/YY hh:mm:ss";
    time = (time ? new Date(time) : new Date());
    let a = null;
    if (str.match(/hh/)) {
        let hours = time.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        str = str.replace("hh", hours);
    } else if (str.match(/H/)) {
        let hours = time.getHours();
        if (hours > 12) {
            hours = hours - 12;
        } else if (hours == 0) {
            hours = 12;
        }
        if (hours > 11) {
            pA = "pm";
        }
        str = str.replace("H", hours);
    }
    if (str.match(/mm/)) {
        let minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        str = str.replace("mm", minutes);
    }
    if (str.match(/ss/)) {
        let seconds = time.getSeconds();
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        str = str.replace("ss", seconds);
    }
    if (str.match(/a/) || str.match(/A/)) {
        if (!a) {
            if (time.getHours() > 11) {
                if (str.match(/A/)) {
                    str = str.replace("A", "PM");
                } else {
                    str = str.replace("a", "pm");
                }
            }
        } else {
            if (str.match(/A/)) {
                str = str.replace("A", a.toUpperCase());
            } else {
                str = str.replace("a", a);
            }
        }
    }
    if (str.match(/DDDD/)) {
        let day = time.getDay();
        str = str.replace("DDDD", days[day]);
    }
    if (str.match(/DD/)) {
        let day = time.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        str = str.replace("DD", day);
    }
    if (str.match(/MMMM/)) {
        let month = time.getMonth();
        str = str.replace("MMMM", months[month]);
    } else if (str.match(/MMM/)) {
        let month = time.getMonth();
        str = str.replace("MMM", months[month].substr(0, 3));
    } else if (str.match(/MM/)) {
        let month = time.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        str = str.replace("MM", month);
    }
    if (str.match(/YYYY/)) {
        str = str.replace("YYYY", time.getFullYear())
    } else if (str.match(/YY/)) {
        str = str.replace("YY", String(time.getFullYear()).substr(2, 4));
    }
    return str;
};


module.exports = {
    format: format,
    unformat: unformat,
    getWeekRange: getWeekRange,
    daysInRange: daysInRange
};