const assert = require('assert');
const err = require('..');

describe('errors', function() {
  it('XPST0003', function() {
    assert.throws(function() { err.XPST0003(); });
    try { err.XPST0003(); }
    catch (e) { assert.equal(e.message, 'err:XPST0003, Syntax error.\nhttps://www.w3.org/TR/xpath-31/#ERRXPST0003'); }
    try { err.XPST0003('Something wrong...'); }
    catch (e) { assert.equal(e.message, 'err:XPST0003, Syntax error. Something wrong...\nhttps://www.w3.org/TR/xpath-31/#ERRXPST0003'); }
  });
});
