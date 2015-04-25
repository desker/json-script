# JSON-script
(Still) concept for run json as native js. JSON must be valid **json-script-syntax** object.

## Idea

# Syntax

```js
var root = this;
```
```json
["var", {"root": "this"}]
```

```json
[
  {
    "var": {
      "a": 10,
      "b": {"calc": ["a","*",10]},
      // or
      "c": {"calc": "(a+b)/3"},
      "d": {"require": "gulp-load-plugins"}
    }
    }
  }
]
```

## Syntax v 0.0.1
```js
(function(root) {
  
  var timer = {
    _startTimer: function() {
      if (!this._timer)
        this._timer = setTimeout()
    }

    start: function(reset) {
      reset && this.reset();
      this._startTimer();
    }
  }

})( window || (module || null) );
```