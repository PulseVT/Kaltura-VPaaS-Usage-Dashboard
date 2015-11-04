var Class,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Class = (function() {
  function Class() {
    this["super"] = bind(this["super"], this);
  }

  Class.prototype["super"] = function() {
    return this.constructor.__super__;
  };

  return Class;

})();
