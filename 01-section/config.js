exports.config = {
  
  framework: 'jasmine',

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: ['spec.js'],

  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};