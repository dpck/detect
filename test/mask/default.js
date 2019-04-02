import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import detect from '../../src'

export default makeTestSuite('test/result', {
  getResults(input) {
    const res = detect(input)
    return res
  },
  jsonProps: ['expected'],
  context: Context,
})