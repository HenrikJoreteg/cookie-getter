var test = require('tape'),
    cookies = require('../cookie-getter');

GLOBAL.document = {
    cookie: void 0
};

test("parsing some simple cookies", function(t) {
    t.plan(1);

    document.cookie = 'name1=val1;name2=val2;name3=val3';

    t.equal(cookies('name2'), 'val2');
});

test('parsing cookies with similar names', function(t) {

    t.plan(2);

    document.cookie = 'myconfig=someval;yourconfig=anotherval;config=yetanotherval;name3=val3';

    t.equal(cookies('config'), 'yetanotherval');
    t.equal(cookies('myconfig'), 'someval');

});

test('parsing cookies separated by spaces', function(t) {

    t.plan(1);

    document.cookie = 'name1=val1; name2=val2; name3=val3';

    t.equal(cookies('name2'), 'val2');

});
