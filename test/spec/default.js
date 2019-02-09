import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import detect from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof detect, 'function')
  },
  async 'calls package without error'() {
    await detect()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await detect({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T