exports.config = {

    baseUrl: 'https://angularjs.org/',
    framework: 'jasmine',
    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        name: 'Protractor Course',
        logName: 'Chrome - English',
        count: 1,
        shardTestFiles: false,
        maxInstances: 1,
        seleniumAddress: 'http://127.0.0.1:4444/wd/hub'
    },

    // specs: ['hello.spec.js', 'todolist.spec.js', 'javascript.spec.js'],
    specs: ['./tests/hello.spec.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){
      // if the parameter is defined...
      if (browser.params.server) {
          global.testData = require('./testdata/testdata-'+browser.params.server);
      }
      else{
          global.testData = require('./testdata/testdata-staging');
      }
    }

};