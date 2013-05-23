// simple commonJS cookie reader, best perf according to http://jsperf.com/cookie-parsing
module.exports = function (name) {
    var cookie = document.cookie,
        setPos = cookie.indexOf(name + '='),
        stopPos = cookie.indexOf(';', setPos);
    return !~setPos ? null : cookie.substring(setPos, ~stopPos ? stopPos : undefined).split('=')[1];
};
