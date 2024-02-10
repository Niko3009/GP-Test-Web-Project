import UnitTests from './Unit'
import { consoleControl } from './settings'

describe('All tests', () => {
    describe('Unit tests', UnitTests)
})

afterEach(consoleControl)
