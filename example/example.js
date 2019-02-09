/* yarn example/ */
import detect from '../src'

(async () => {
  const res = await detect({
    text: 'example',
  })
  console.log(res)
})()