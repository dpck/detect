/* yarn example/ */
import detect from '../src'
import read from '@wrote/read'

(async () => {
  const source = await read('example/source.js')
  const res = detect(source)
  console.log(res)
})()