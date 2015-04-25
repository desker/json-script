(function(root) {
  
  var timer = {
    _start: function() {
      var self = this;      
      if (!this._timer)
        this._timer = setTimeout(self._start);
    },

    _reset: function() {
      if (this._timer) {
        clearTimeout(this._timer);
        delete this._timer;
      }
    },

    start: function(reset) {
      if (reset) this._reset();
      this._start();
    }
  }

})( window || (module || null) );