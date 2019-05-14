import mismatch from 'mismatch'

const RE = /^ *import(?:\s+(?:[^\s,]+)\s*,?)?(?:\s*{(?:[^}]+)})?\s+from\s+(['"])(.+?)\1/gm
const RE2 = /^ *import\s+(?:.+?\s*,\s*)?\*\s+as\s+.+?\s+from\s+(['"])(.+?)\1/gm
const RE3 = /^ *import\s+(['"])(.+?)\1/gm
const RE4 = /^ *export\s+(?:{[^}]+?}|\*)\s+from\s+(['"])(.+?)\1/gm

/**
 * Returns the names of the modules imported with `import` and `export` statements.
 * @param {string} source The source to detect matches in.
 */
const getMatches = (source) => {
  const res = [RE, RE2, RE3, RE4].reduce((acc, re) => {
    const m = mismatch(re, source, ['q', 'from'])
      .map(a => a['from'])
    return [...acc, ...m]
  }, [])
  return res
}

export default getMatches

export const RES = {
  RE, RE2, RE3, RE4,
}