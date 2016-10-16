exports.config = {
  
  framework: 'jasmine',

    /* ***********************************************************
                           C O N F I G  2
     *************************************************************/

    directConnect: true,

    /* **************************
         T E S T   S U I T E S
     ****************************/

    suites:{
        helloTests : 'hello.spec.js',
        todolistTests: 'todolist.spec.js',
        regressionTests: '*.spec.js'
    },

    /* *******************************
      S H A R D   T E S T   F I L E S
     *********************************/

    multiCapabilities: [
        {
            browserName: 'chrome',
            name: 'Protractor Course',
            logName: 'Chrome - English',
            maxSessions: 2,
            verboseMultiSessions: true,
            shardTestFiles: true,
            maxInstance: 5
        },
        {
            browserName: 'firefox',
            name: 'Protractor Course',
            logName: 'Firefox - English',
            maxSessions: 2,
            verboseMultiSessions: true,
            shardTestFiles: true,
            maxInstance: 5
        }
    ],

    /* *******************************
               B A S E   U R L
     *********************************/

    baseUrl: 'https://angularjs.org/',

    /* *******************************
               P A R A M S
     *********************************/

    params:{
      hello: {
          name: 'Adrian'
      }
    },
    
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};