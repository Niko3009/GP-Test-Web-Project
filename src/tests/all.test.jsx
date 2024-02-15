import { consoleControl } from './config'

import UnitTests from './UnitTests'
// import ApiTests from './ApiTests'

describe('All tests', () => {
    describe('Unit tests', UnitTests)
    // describe('Api tests', ApiTests)
})

afterEach(consoleControl)
