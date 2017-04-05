// simple commonJS cookie reader, best perf according to http://jsperf.com/cookie-parsing
module.exports = function (name) {
  if (typeof document === 'undefined') return null
  var cookie = document.cookie
  var setPos = cookie.search(new RegExp('\\b' + name + '='))
  var stopPos = cookie.indexOf(';', setPos)
  var res
  if (!~setPos) return null
  res = decodeURIComponent(cookie.substring(setPos, ~stopPos ? stopPos : undefined).split('=')[1])
  return (res.charAt(0) === '{') ? JSON.parse(res) : ((res.indexOf('j:{') === 0) ? JSON.parse(res.substr(2)) : res)
}
