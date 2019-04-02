<div align="center">
    <img src="icon.png">
    <br>
    <p><i>Light (1kb gzipped) Javascript date and time utilities (formatting, ranges e.t.c).</i></p>
</div>

If you appreciate this project, please 🌟 it on [GitHub](https://github.com/eddiejibson/dubium).

Dubium works both in the browser and with node.

For browser use, either host the dubium.js file yourself (By [downloading the current release here](https://github.com/eddiejibson/dubium/releases)) or use a CDN (and, yes, it's free):

```html
<script src="https://cdn.jsdelivr.net/npm/dubium@0.0.8/dist/dubium.min.js"></script>
```

As for NodeJS, it can be included like so:

```javascript
const dubium = require("dubium");
```

## Example


```javascript
// In this example, if the date is not passed in, we'll pretend it's currently
// Febuary 1, 1970 19:30:00 UTC.

// .format returns the current date and/or time in a formatted manor
dubium.format("DD/MM/YYYY hh:mm:ss") // 01/02/1970 19:30:00
dubium.format("MM/DD/YYYY H:mm:ss a") // 02/01/1970 7:30:00 pm
dubium.format("DD/MMM/YY H:mm:ss A") // 01/Mar/70 7:30:00 PM
dubium.format("DD/MMMM/YY H:mm:ss A") // 01/March/70 7:30:00 PM

// You can also pass in a date to format:
dubium.format("DD/MM/YYYY hh:mm:ss", 1554159037369); // 01/04/2019 23:50:37
dubium.format("DD/MM/YYYY hh:mm:ss", "Fri, 02 Feb 1996 03:04:05 GMT"); // 02/02/1996 03:04:05

// You may unformat a string to get the epoch integer:
dubium.unformat("01/March/70 7:30:00 PM", "DD/MMMM/YY H:mm:ss A"); // 3163604400000

// You can get all the day value from a range of dates (inclusive of the ones being passed in)...
dubium.daysInRange(1554160761053, 1554333561053) // Array(3) [ 1554160761053, 1554247161053, 1554333561053 ]

// You can also get the range of the start of the week and end
dubium.getWeekRange() //Array [ 1554073200000, 1554677999999 ]
// Obviously you can pass an epoch value, too, if you want:
dubium.getWeekRange(3163604400000); // Array [ 3163446000000, 3161375999999 ]

// And, yeah, that's pretty much it... 
// These functions will be improved and added upon soon, too.
```

## Benchmarks

Tested the speed of formatting and unformatting in Chrome 75 on Windows 10.

See it for yourself [here on jsPerf]([https://jsperf.com/dubium/4](https://jsperf.com/dubium/4)).

|Library|Ops/sec|
|--|--|
|Dubium|197,278|
|[DayJS]([https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs))|108,859|
|[MomentJS]([https://github.com/moment/moment/](https://github.com/moment/moment/))|56,163|


## Development

Building dubium for browser:

```bash
npm run build
```
