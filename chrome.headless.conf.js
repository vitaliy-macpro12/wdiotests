const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',

    maxInstances: 10,
    capabilities: [{

        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=1280,720', '--headless', '--disable-gpu']
        },
    }],

    services: ['devtools'],

    ...base,
    ...hooks
}
