exports.config = {

    // =======================
    // Docker Environment
    // =======================
    //Uncomment these variables to overide the default selenium host if you are using
    //docker to run selenium.  Leave this alone if you are using selenium-standalone from
    //your node modules or from a different location on your local machine.
    //
    // host: '192.168.99.100',
    // port: '4444',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    capabilities: [
        // {
        //     browserName: 'firefox',
        //     platform: 'Windows 10',
        //     version: '45.0',
        //     maxInstances: '1'
        // },
        // {
            // browserName: 'firefox',
            // // platform: 'OS X 10.11',
            // // version: '45.0',
            // maxInstances: '1',
        // },
        {
            browserName: 'chrome',
            // platform: 'Windows 10',
            // version: '50.0',
            maxInstances: '1',
        },
        // {
        //     browserName: 'Chrome',
        //     platform: 'OS X 10.11',
        //     version: '48.0',
        //     maxInstances: '1'
        // },
        // {
        //     browserName: 'MicrosoftEdge',
        //     platform: 'Windows 10',
        //     version: '13.10586',
        //     maxInstances: '1'
        // },
        // {
        //     browserName: 'Internet Explorer',
        //     platform: 'Windows 10',
        //     version: '11.103',
        //     maxInstances: '1'
        // },
        // {
        //     browserName: 'Safari',
        //     platform: 'OS X 10.11',
        //     version: '9',
        //     maxInstances: '1'
        // }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './test/reports/errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'https://app.e2ma.net/app2/login/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 90000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['sauce'],

    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec, and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './test/reports/allure-results/',
        },
    },
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./test/support/stepDefinitions/'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,     // <boolean> hide step definition snippets for pending steps
        source: false,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],
        // ['@only', '@isolate'], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    //
    // =====
    // Hooks
    // =====
    // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    onPrepare: function() { //eslint-disable-line object-shorthand
        require('babel-register')({
            blacklist: [
                'regenerator',
            ],
        });
    },
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function() { //eslint-disable-line object-shorthand
        var chai = require('chai'); //eslint-disable-line no-var
        global.expect = chai.expect;
        chai.Should();
    },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function (commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // afterTest: function (test) {
    // },
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function (suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    // after: function (capabilities, specs) {
    // },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    // onComplete: function(exitCode) {
    // }
};
