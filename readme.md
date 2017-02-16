# cookie-getter

Minimalist (<10 LOC), performant, clientside cookie reader module and nothing else. It is tolerant of being required server-side. It will simply returns `null` if called within node.

## Why publish another cookie tool?

Dead simple function that has the best performance according to: http://jsperf.com/cookie-parsing

Handy to have as a separate module for easy installation with npm.

## Usage

installing:

```
npm install cookie-getter
```

using:

```js
var cookies = require('cookie-getter');

// returns the value of the cookie if it's just a simple string
var username = cookies('username');

// if the cookie is a JSON string it will parse it as well
user = cookies('user');

console.log(user.firstName); // logs out name of firstName value if encoded as JSON in cookie.
```

## License

MIT
