var test = require('tape')
var cookies = require('../cookie-getter')

global.document = {
  cookie: void 0
}

test('parsing some simple cookies', function (t) {
  t.plan(1)
  document.cookie = 'name1=val1;name2=val2;name3=val3'
  t.equal(cookies('name2'), 'val2')
})

test('parsing cookies with similar names', function (t) {
  t.plan(2)
  document.cookie = 'myconfig=someval;yourconfig=anotherval;config=yetanotherval;name3=val3'
  t.equal(cookies('config'), 'yetanotherval')
  t.equal(cookies('myconfig'), 'someval')
})

test('parsing cookies separated by spaces', function (t) {
  t.plan(1)
  document.cookie = 'name1=val1; name2=val2; name3=val3'
  t.equal(cookies('name2'), 'val2')
})

test('parsing JSON cookies', function (t) {
  t.plan(2)
  document.cookie = 'obj=%7B%22foo%22%3A%22bar%22%7D'
  t.equal(typeof cookies('obj'), 'object')
  t.equal(cookies('obj').foo, 'bar')
})

test('parsing Express JSON cookies', function (t) {
  t.plan(2)
  document.cookie = 'obj=j%3A%7B%22foo%22%3A%22bar%22%7D'
  t.equal(typeof cookies('obj'), 'object')
  t.equal(cookies('obj').foo, 'bar')
})
