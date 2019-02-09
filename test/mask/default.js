import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import detect from '../../src'

const ts = makeTestSuite('test/result', {
  getResults(input) {
    const res = detect(input)
    return res
  },
  jsonProps: ['expected'],
  context: Context,
})

export default ts
