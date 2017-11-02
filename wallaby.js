module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'bower_components/requirejs/require.js', instrument: false},
      {pattern: 'bower_components/knockout/**/*.js', instrument: false, load: false},
      {pattern: 'bower_components/knockout-mapping/**/*.js', instrument: false, load: false},
      {pattern: 'bower_components/knockout-postbox/**/*.js', instrument: false, load: false},
      {pattern: 'bower_components/knockout-repeat/**/*.js', instrument: false, load: false},
      {pattern: 'bower_components/knockout.punches/**/*.js', instrument: false, load: false},
      {pattern: 'src/MobileStore/**', load: false},
      {pattern: 'src/Base/**', load: false},
      {pattern: 'test/test-main.es6', instrument: false}
    ],
    tests: [
      {pattern: 'test/**/*Spec.es6', load: false}
    ],
    /* Without this requirejs can't load modules, since it adds '.js' suffix to each url */
    preprocessors: {
      '**/*.es6': (file) => {
        file.changeExt('js');
        return file.content;
      }
    },
    debug: false,
    env: {
      kind: 'chrome'
    },
    compilers: {
      '**/*.es6': wallaby.compilers.babel({'sourceMaps': true, 'babelrc': true})
    }
  };
};