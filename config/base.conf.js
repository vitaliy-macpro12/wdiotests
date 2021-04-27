module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [

    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
}
