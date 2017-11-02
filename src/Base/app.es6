define(function() {

  var App = function(name) {
    this.name = name;
  };

  App.prototype.greet = function() {
    return 'Hello ' + this.name;
  };

  return App;

});