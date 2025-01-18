# xx-err
[![npm](https://img.shields.io/npm/v/xx-err.svg)](https://www.npmjs.com/package/xx-err)
[![npm](https://img.shields.io/npm/dt/xx-err.svg)](https://www.npmjs.com/package/xx-err)
[![build](https://github.com/jazz-soft/xx-err/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/xx-err/actions)
[![Coverage](https://coveralls.io/repos/github/jazz-soft/xx-err/badge.svg?branch=main)](https://coveralls.io/github/jazz-soft/xx-err?branch=main)

## XML errors:
* [FOAP0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOAP0001): Wrong number of arguments.
* [FOAR0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOAR0001): Division by zero.
* [FOAR0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOAR0002): Numeric operation overflow/underflow.
* [FOAY0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOAY0001): Array index out of bounds.
* [FOAY0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOAY0002): Negative array length.
* [FOCA0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOCA0001): Input value too large for decimal.
* [FOCA0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOCA0002): Invalid lexical value.
* [FOCA0003](https://www.w3.org/TR/xpath-functions-31/#ERRFOCA0003): Input value too large for integer.
* [FOCA0005](https://www.w3.org/TR/xpath-functions-31/#ERRFOCA0005): NaN supplied as float/double value.
* [FOCA0006](https://www.w3.org/TR/xpath-functions-31/#ERRFOCA0006): String to be cast to decimal has too many digits of precision.
* [FOCH0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOCH0001): Codepoint not valid.
* [FOCH0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOCH0002): Unsupported collation.
* [FOCH0003](https://www.w3.org/TR/xpath-functions-31/#ERRFOCH0003): Unsupported normalization form.
* [FOCH0004](https://www.w3.org/TR/xpath-functions-31/#ERRFOCH0004): Collation does not support collation units.
* [FODC0001](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0001): No context document.
* [FODC0002](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0002): Error retrieving resource.
* [FODC0003](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0003): Function not defined as deterministic.
* [FODC0004](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0004): Invalid collection URI.
* [FODC0005](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0005): Invalid argument to fn:doc or fn:doc-available.
* [FODC0006](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0006): String passed to fn:parse-xml is not a well-formed XML document.
* [FODC0010](https://www.w3.org/TR/xpath-functions-31/#ERRFODC0010): The processor does not support serialization.
* [FODF1280](https://www.w3.org/TR/xpath-functions-31/#ERRFODF1280): Invalid decimal format name.
* [FODF1310](https://www.w3.org/TR/xpath-functions-31/#ERRFODF1310): Invalid decimal format picture string.
* [FODT0001](https://www.w3.org/TR/xpath-functions-31/#ERRFODT0001): Overflow/underflow in date/time operation.
* [FODT0002](https://www.w3.org/TR/xpath-functions-31/#ERRFODT0002): Overflow/underflow in duration operation.
* [FODT0003](https://www.w3.org/TR/xpath-functions-31/#ERRFODT0003): Invalid timezone value.
* [FOER0000](https://www.w3.org/TR/xpath-functions-31/#ERRFOER0000): Unidentified error.
* [FOFD1340](https://www.w3.org/TR/xpath-functions-31/#ERRFOFD1340): Invalid date/time formatting parameters.
* [FOFD1350](https://www.w3.org/TR/xpath-functions-31/#ERRFOFD1350): Invalid date/time formatting component.
* [FOJS0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0001): JSON syntax error.
* [FOJS0003](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0003): JSON duplicate keys.
* [FOJS0004](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0004): JSON: not schema-aware.
* [FOJS0005](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0005): Invalid options.
* [FOJS0006](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0006): Invalid XML representation of JSON.
* [FOJS0007](https://www.w3.org/TR/xpath-functions-31/#ERRFOJS0007): Bad JSON escape sequence.
* [FONS0004](https://www.w3.org/TR/xpath-functions-31/#ERRFONS0004): No namespace found for prefix.
* [FONS0005](https://www.w3.org/TR/xpath-functions-31/#ERRFONS0005): Base-uri not defined in the static context.
* [FOQM0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOQM0001): Module URI is a zero-length string.
* [FOQM0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOQM0002): Module URI not found.
* [FOQM0003](https://www.w3.org/TR/xpath-functions-31/#ERRFOQM0003): Static error in dynamically-loaded XQuery module.
* [FOQM0005](https://www.w3.org/TR/xpath-functions-31/#ERRFOQM0005): Parameter for dynamically-loaded XQuery module has incorrect type.
* [FOQM0006](https://www.w3.org/TR/xpath-functions-31/#ERRFOQM0006): No suitable XQuery processor available.
* [FORG0001](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0001): Invalid value for cast/constructor.
* [FORG0002](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0002): Invalid argument to fn:resolve-uri().
* [FORG0003](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0003): fn:zero-or-one called with a sequence containing more than one item.
* [FORG0004](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0004): fn:one-or-more called with a sequence containing no items.
* [FORG0005](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0005): fn:exactly-one called with a sequence containing zero or more than one item.
* [FORG0006](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0006): Invalid argument type.
* [FORG0008](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0008): The two arguments to fn:dateTime have inconsistent timezones.
* [FORG0009](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0009): Error in resolving a relative URI against a base URI in fn:resolve-uri.
* [FORG0010](https://www.w3.org/TR/xpath-functions-31/#ERRFORG0010): Invalid date/time.
* [FORX0001](https://www.w3.org/TR/xpath-functions-31/#ERRFORX0001): Invalid regular expression flags.
* [FORX0002](https://www.w3.org/TR/xpath-functions-31/#ERRFORX0002): Invalid regular expression.
* [FORX0003](https://www.w3.org/TR/xpath-functions-31/#ERRFORX0003): Regular expression matches zero-length string.
* [FORX0004](https://www.w3.org/TR/xpath-functions-31/#ERRFORX0004): Invalid replacement string.
* [FOTY0012](https://www.w3.org/TR/xpath-functions-31/#ERRFOTY0012): Argument to fn:data() contains a node that does not have a typed value.
* [FOTY0013](https://www.w3.org/TR/xpath-functions-31/#ERRFOTY0013): The argument to fn:data() contains a function item.
* [FOTY0014](https://www.w3.org/TR/xpath-functions-31/#ERRFOTY0014): The argument to fn:string() is a function item.
* [FOTY0015](https://www.w3.org/TR/xpath-functions-31/#ERRFOTY0015): An argument to fn:deep-equal() contains a function item.
* [FOUT1170](https://www.w3.org/TR/xpath-functions-31/#ERRFOUT1170): Invalid $href argument to fn:unparsed-text() (etc.)
* [FOUT1190](https://www.w3.org/TR/xpath-functions-31/#ERRFOUT1190): Cannot decode resource retrieved by fn:unparsed-text() (etc.)
* [FOUT1200](https://www.w3.org/TR/xpath-functions-31/#ERRFOUT1200): Cannot infer encoding of resource retrieved by fn:unparsed-text() (etc.)
* [FOXT0001](https://www.w3.org/TR/xpath-functions-31/#ERRFOXT0001): No suitable XSLT processor available.
* [FOXT0002](https://www.w3.org/TR/xpath-functions-31/#ERRFOXT0002): Invalid parameters to XSLT transformation.
* [FOXT0003](https://www.w3.org/TR/xpath-functions-31/#ERRFOXT0003): XSLT transformation failed.
* [FOXT0004](https://www.w3.org/TR/xpath-functions-31/#ERRFOXT0004): XSLT transformation has been disabled.
* [FOXT0006](https://www.w3.org/TR/xpath-functions-31/#ERRFOXT0006): XSLT output contains non-accepted characters.
* [XPST0003](https://www.w3.org/TR/xpath-31/#ERRXPST0003): Syntax error.
## Usage:
`npm install xx-err --save`
```js
const err = require('xx-err');

// ...

if (/*something wrong*/) err.XPST0003('Something went wrong...');

// - this throws the following Error:
// err:XPST0003, Syntax error. Something went wrong...
// see https://www.w3.org/TR/xpath-31/#ERRXPST0003
```
## Arguments:
`err.XPST0003();` `err.XPST0003(str);` `err.XPST0003(obj);` `err.XPST0003(str, obj);`
* `str` - a string to be included in the error's `message`.
* `obj` - additional data to attach to the error object.

e.g:
```js
try {
  err.XPST0003('Oops!', { row: 2, col: 5 });
}
catch (e) {
  console.log(e.code); // XPST0003
  console.log(e.message);
  // err:XPST0003, Syntax error. Oops!
  // see https://www.w3.org/TR/xpath-31/#ERRXPST0003
  console.log(e.row);  // 2
  console.log(e.col);  // 5
}
```

