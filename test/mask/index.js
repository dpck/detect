import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import detect from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await detect({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
