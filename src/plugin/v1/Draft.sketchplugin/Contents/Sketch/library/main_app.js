var DraftApp = {
  extend: function( options, target ){
    var target = target || this;

    for ( var key in options ){
      target[key] = options[key];
    }
    return target;
  }
};
