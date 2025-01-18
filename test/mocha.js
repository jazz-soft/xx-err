const assert = require('assert');
const err = require('..');

describe('errors', function() {
  it('XPST0003', function() {
    assert.throws(function() { err.XPST0003(); });
    try { err.XPST0003(); }
    catch (e) {
      assert.equal(e.code, 'XPST0003');
      assert.equal(e.message, 'err:XPST0003, Syntax error.\nsee https://www.w3.org/TR/xpath-31/#ERRXPST0003');
    }
    try { err.XPST0003('Something wrong...'); }
    catch (e) {
      assert.equal(e.code, 'XPST0003');
      assert.equal(e.message, 'err:XPST0003, Syntax error. Something wrong...\nsee https://www.w3.org/TR/xpath-31/#ERRXPST0003');
    }
    try { err.XPST0003({ pos: 20 }); }
    catch (e) {
      assert.equal(e.code, 'XPST0003');
      assert.equal(e.message, 'err:XPST0003, Syntax error.\nsee https://www.w3.org/TR/xpath-31/#ERRXPST0003');
      assert.equal(e.pos, 20);
    }
    try { err.XPST0003('Oops!', { row: 1, col: 5 }); }
    catch (e) {
      assert.equal(e.code, 'XPST0003');
      assert.equal(e.message, 'err:XPST0003, Syntax error. Oops!\nsee https://www.w3.org/TR/xpath-31/#ERRXPST0003');
      assert.equal(e.row, 1);
      assert.equal(e.col, 5);
    }
  });
});
