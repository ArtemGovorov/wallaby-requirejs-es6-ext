wallaby.delayStart();

requirejs.config({
  baseUrl: '/src/Base',
});

require(wallaby.tests, function () {
  wallaby.start();
});