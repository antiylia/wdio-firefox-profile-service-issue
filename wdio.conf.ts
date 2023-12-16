import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['firefox-profile', {
            profileDirectory: "./profile"
        }]
    ],
    
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
