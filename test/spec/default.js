import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import detect from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof detect, 'function')
  },
}

export default T