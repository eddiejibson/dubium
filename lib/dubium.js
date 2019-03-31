class dubium {
    static months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    static format = function (str = null, time = null) {
        str = str || "DD/MM/YY hh:mm:ss";
        time = time || new Date();
        let a = null;
        if (str.match(/hh/)) {
            let hours = time.getHours();
            if (hours < 10) {
                hours = `0${hours}`;
            }
            str = str.replace("hh", hours);
        } else if (str.match(/h/)) {
            let hours = time.getHours();
            if (hours > 12) {
                hours = hours - 12;
            } else if (hours == 0) {
                hours = 12;
            }
            if (hours > 11) {
                pA = "pm";
            }
            str = str.replace("h", hours);
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
        if (str.match(/DD/)) {
            let day = time.getDate();
            if (day < 10) {
                day = `0${day}`;
            }
            str = str.replace("DD", day);
        }
        if (str.match(/MMMM/)) {
            let month = time.getMonth();
            str = str.replace("MMMM", dubium.months[month]);
        } else if (str.match(/MMM/)) {
            let month = time.getMonth();
            str = str.replace("MMM", dubium.months[month].substr(0, 3));
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
}