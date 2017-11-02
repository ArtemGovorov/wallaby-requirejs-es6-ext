define(['app'], function (App) {

  describe('just checking', function () {

    it('works for app', function () {

      var app = new App('John');

      expect(app.greet()).toEqual('Hello John');
    });

  });

});