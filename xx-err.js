const code = require('./code.js');
const err = {};
const url = {
  FO: 'https://www.w3.org/TR/xpath-functions-31/#ERR',
  XP: 'https://www.w3.org/TR/xpath-31/#ERR',
  XQ: 'https://www.w3.org/TR/xpath-31/#ERR',
};

for (var c of Object.keys(code)) {
  err[c] = function(s, o) {
    if (typeof s == 'object') { o = s; s = undefined; }
    var error = new Error(`err:${c}, ${code[c]}${s ? ' ' + s : ''}\nsee ${url[c.substring(0, 2)]}${c}`);
    error.code = c;
    if (typeof o == 'object') for (var k of Object.keys(o)) error[k] = o[k];
    throw error;
  };
}

module.exports = err;