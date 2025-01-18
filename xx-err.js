const code = require('./code.js');
const err = {};
const url = {
  FO: 'https://www.w3.org/TR/xpath-functions-31/#ERR',
  XP: 'https://www.w3.org/TR/xpath-31/#ERR',
  XQ: 'https://www.w3.org/TR/xpath-31/#ERR',
};

for (var k of Object.keys(code)) {
  err[k] = function(s) {
    throw new Error(`err:${k}, ${code[k]}${s ? ' ' + s : ''}\nsee ${url[k.substring(0, 2)]}${k}`);
  };
}

module.exports = err;