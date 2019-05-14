import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import detect from '../../src'

export default makeTestSuite('test/result', {
  getResults() {
    const res = detect(this.input)
    return res
  },
  jsonProps: ['expected'],
  context: Context,
})