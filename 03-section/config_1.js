exports.config = {
  
  framework: 'jasmine',

    /* ***********************************************************
                           C O N F I G  1
     *************************************************************/


    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    //seleniumServerJar: '/Users/adrianbenko/Downloads/selenium-server-standalone-2.46.0.jar',

    // Sauce Labs
    // seleniumAddress: 'ondemand.saucelabs.com:80',
    // sauceUser: 'adrianTipico',
    // sauceKey: 'qwertyuioplkjhgfdsa',

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        name: 'Protractor Course',
        logName: 'Chrome - English',
        count: 1,
        shardTestFiles: false,
        maxInstances: 1,
        specs: ['spec.js'],
        exclude: ['spec/doNotRunInChromeSpec.js'],
        seleniumAddress: 'http://127.0.0.1:4444/wd/hub'
    },

    multiCapabilities: [
        {
            browserName: 'chrome',
            name: 'Protractor Course',
            logName: 'Chrome - English',
            maxSessions: 2,
            verboseMultiSessions: true
        },
        {
            browserName: 'firefox',
            name: 'Protractor Course',
            logName: 'Firefox - English',
            maxSessions: 2,
            verboseMultiSessions: true
        }
    ],

    specs: ['spec.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};